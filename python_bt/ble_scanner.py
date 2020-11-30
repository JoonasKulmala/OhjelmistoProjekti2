import bluetooth
import schedule
import time
import calendar
import json
import requests
import urllib.request
import socket
from bluetooth.bluez import discover_devices
# Return MAC address, on fail generate random String
from uuid import getnode as get_mac
# Capped at 50,000 monthly requests
import ipinfo
from ipinfo import details
from requests.exceptions import ConnectTimeout


# Endpoint listing every scan result
RESULTS_URL = 'https://raspberrybackend.herokuapp.com/results'


# Endpoint listing each individual Raspberry Pi
RASPBERRIES_URL = 'https://raspberrybackend.herokuapp.com/api/raspberries'


def ble_scan():
    ble_devices = []
    print('Scanning for nearby devices...')
    ble_devices = bluetooth.discover_devices(lookup_names=True)
    print('Devices found: %s' % len(ble_devices))

    # Name, MAC address of each scanned ble device
    for addr, name in ble_devices:
        print('name :', name, 'address :', addr)

    # Return current time
    ts = time.time()
    readable = time.ctime(ts)

    # Return name of scan performing device
    hostname = socket.gethostname()

    # Return MAC address of scan performing device
    # macaddress = get_mac()

    # Return latitude, longitude of scan performing device
    while True:
        try:
            access_token = '1a9c774186e4d2'
            handler = ipinfo.getHandler(access_token)
            ip_address = ''
            details = handler.getDetails(ip_address)

            break
        except ConnectTimeout:
            pass

    # POST data in JSON format
    objToSend = {'location': hostname, 'foundDevices': len(
        ble_devices), 'dateAdded': readable, 'timestamp': readable, 'latitude': details.latitude, 'longitude': details.longitude}

    data = getExistingRaspberries()
    locations = []

    # Append existing raspberries to [location]
    i = 0
    while i < len(data):
        locations.append(data[i]['location'])
        i += 1

    print(hostname)
    print(locations)
    if hostname in locations:
        print('Existing Raspberry Pi')
        send = requests.post(RESULTS_URL, json=objToSend)

    else:
        print('New Raspberry Pi, adding to database')
        send = requests.post(
            RASPBERRIES_URL, json=objToSend)

    print(send.text)


# Get existing Raspberries
def getExistingRaspberries():
    with urllib.request.urlopen(RASPBERRIES_URL) as response:
        return json.loads(response.read())
