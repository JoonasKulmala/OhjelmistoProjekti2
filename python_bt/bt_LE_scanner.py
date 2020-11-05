import bluetooth
from bluetooth.bluez import discover_devices  # BLE

import schedule
import time
import calendar
import json
import requests
import urllib.request
import socket

JSON_URL = 'https://raspberrybackend.herokuapp.com/results'
PUT_URL = 'https://raspberrybackend.herokuapp.com/api/raspberries'  # Fixed typo


def ble_scan():
    ble_devices = []
    print('Scanning for nearby devices...')
    nearby_devices = bluetooth.discover_devices(lookup_names=True)
    print('Devices found: %s' % len(nearby_devices))  # Print number of devices

    for addr, name in nearby_devices:
        # Print 'name', 'address' for each device, can be modified to include more
        print('name :', name, 'address :', addr)

    for item in nearby_devices:
        if item in ble_devices:
            pass
        else:
            ble_devices.append(item)

    # Hakee ajan ja muuttaa se luettavaksi
    ts = time.time()
    readable = time.ctime(ts)

    # Hakee laitteen nimen ja käyttää sitä sijantina
    # To-do
    location = 'Mockup location'  # socket.gethostname()
    addr = '00:0a:95:9d:69:69'  # Laitteen MAC-osoite mahdollisesti poistuu

    # Lähetettävä JSON objekti
    objToSend = {'location': location, 'foundDevices': len(
        ble_devices)*1, 'macaddr': addr, 'date': readable}

    # Talennetaan JSON data muuttujaan, jotta voidaan käsitellä sitä
    data = get_locations()
    locations = []

    i = 0
    # Käy datan läpi ja lisää laitteet listaan
    while i < len(data):
        locations.append(data[i]['location'])
        i += 1

    print(locations)
    # Tarkistaa löytyykö laitetta jo backendistä, jos löytyy lähettää PUT kutsun jos ei löydy lähettää POST kutsun
    for location in locations:
        if location in locations:
            index = locations.index(location + 1)  # Crash? Try 'location, 1'
            str_index = str(index)
            send = requests.put(
                'https://raspberrybackend.herokuapp.com/api/raspberries/' + str_index, json=objToSend)

        else:
            send = requests.post(JSON_URL, json=objToSend)

    print(send.text)


def get_locations():  # Haetaan JSON data, jotta voidaan tarkistaa löytyykö laitetta vai ei
    with urllib.request.urlopen(JSON_URL) as response:
        return json.loads(response.read())
