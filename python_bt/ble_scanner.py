from bluetooth.bluez import discover_devices
import bluetooth
import schedule
import time
import calendar
import json
import requests
import urllib.request
import socket
import ipinfo

JSON_URL = 'https://raspberrybackend.herokuapp.com/results'
PUT_URL = 'https://raspberrybackend.herokuapp.com/api/raspberries'


def ble_scan():
    ble_devices = []
    print('Scanning for nearby devices...')
    nearby_devices = bluetooth.discover_devices(lookup_names=True)
    print('Devices found: %s' % len(nearby_devices))

    for addr, name in nearby_devices:
        print('name :', name, 'address :', addr)

    for item in nearby_devices:
        if item in ble_devices:
            pass
        else:
            ble_devices.append(item)

    ts = time.time()
    readable = time.ctime(ts)

    location = ''
    addr = ''

    objToSend = {'location': location, 'foundDevices': len(ble_devices),
                 'macaddr': addr, 'date': readable}

    data = get_locations()
    locations = []

    i = 0
    while i < len(data):
        locations.append(data[i]['location'])
        i += 1

    print(locations)
    for location in locations:
        if location in locations:
            index = locations.index(location + 1)
            str_index = str(index)
            send = requests.put(
                'https://raspberrybackend.herokuapp.com/api/raspberries/' + str_index, json=objToSend)

        else:
            send = requests.post(JSON_URL, json=objToSend)


def get_locations():
    with urllib.request.urlopen(JSON_URL) as response:
        return json.loads(response.read())
