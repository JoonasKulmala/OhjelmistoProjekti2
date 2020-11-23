import bluetooth
import schedule
import time
import calendar
import json
import requests
import urllib.request
import socket
from bluetooth.bluez import discover_devices

# Return MAC address, if fail generate random string
from uuid import getnode as get_mac

# Capped at 50,000 monthly requests, need error handling for slow response
import ipinfo
from ipinfo import details
from requests.exceptions import ConnectTimeout


# Endpoint listing every scan result
RESULTS_URL = 'http://localhost:8080/results'
# RESULTS_URL = 'https://raspberrybackend.herokuapp.com/results'

# Endpoint listing each individual Raspberry Pi
RASPBERRIES_URL = 'http://localhost:8080/api/raspberries'
# RASPBERRIES_URL = 'https://raspberrybackend.herokuapp.com/api/raspberries'


def ble_scan():
    ble_devices = []
    print('Scanning for nearby devices...')
    ble_devices = bluetooth.discover_devices(lookup_names=True)
    print('Devices found: %s' % len(ble_devices))

    # Name, MAC for each scanned device
    for addr, name in ble_devices:
        print('name :', name, 'address :', addr)

    # Append unique device, unnecessary?

    # for item in ble_devices:
    #     if item in ble_devices:
    #         pass
    #     else:
    #         ble_devices.append(item)

    # Return current time
    ts = time.time()
    readable = time.ctime(ts)

    # Return name of scan performing device
    # hostname = 'Joonas-Osaa-Taas'
    hostname = socket.gethostname()

    # Return MAC address of scan performing device
    # macaddress = get_mac()

    # Return latitude, longitude of scan performing device, (details.all) for full response
    while True:
        try:
            access_token = '1a9c774186e4d2'  # Require personal access token from ipinfo.io
            handler = ipinfo.getHandler(access_token)
            ip_address = ''
            details = handler.getDetails(ip_address)

            break
        except ConnectTimeout:
            print('Slow response, attempting reconnect...')
            return True

    # Data to be sent in JSON format
    objToSend = {'location': hostname, 'foundDevices': len(
        ble_devices), 'date': readable, 'latitude': details.latitude, 'longitude': details.longitude}

    # Produce list[] of each Raspberry Pi (hostname)
    #data = get_locations()
    #locations = [x['location'] for x in data]

    data = get_locations()
    locations = []

    i = 0
    while i < len(data):
        locations.append(data[i]['location'])
        i += 1

    print(hostname)
    print(locations)
    # for hostname in locations:
    if hostname in locations:
        print('Existing Raspberry Pi')
        send = requests.post(RESULTS_URL, json=objToSend)

    else:
        print('New Raspberry Pi, add to /raspberries')
        # index = locations.index(hostname, 1)  # (hostname + 1)
        # str_index = str(index)
        send = requests.post(
            RASPBERRIES_URL, json=objToSend)

    print(send.text)


def get_locations():
    with urllib.request.urlopen(RESULTS_URL) as response:  # rasps_url?
        return json.loads(response.read())
