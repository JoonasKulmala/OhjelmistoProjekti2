import bluetooth
import schedule
import time
import calendar
import json
import requests
import urllib.request
import socket

JSON_URL = 'https://raspberrybackend.herokuapp.com/results'
PUT_URL = 'https://raspberrybackend.herokuappa.com/api/raspberries/'


def scan():
    bt_devices = []
    print('Looking for bluetooth devices...')
    devices = bluetooth.discover_devices(lookup_names=True)
    print(type(devices))
    print("Devices found: %s" % len(devices))

    for item in devices:
        print(item)
        if item in bt_devices:
            pass
        else:
            bt_devices.append(item)

    # Hakee ajan ja muuttaa sen luettavaksi
    ts = time.time()
    readable = time.ctime(ts)

    # Hakee laitteen nimen ja käyttää sitä sijaintina
    location = socket.gethostname()
    addr = '00:0a:95:9d:69:69'

    # Lähetettävä JSON objekti
    objToSend = {'location': location, 'foundDevices': len(
        bt_devices)*3, 'macaddr': addr, 'date': readable}

    # Tallennetaan JSON data muuttujaan, jotta voidaan käsitellä sitä
    data = get_locations()
    locations = []

    i = 0
    # Käy datan läpi ja lisää laitteet listaan
    """while i < len(data):
        locations.append(data[i]['location'])
        i += 1"""

    # Tarkistaa löytyykö laitetta jo backendistä, jos löytyy lähettää PUT kutsun jos ei löydy lähettää POST kutsun
    """if location in locations:
        s = str(i)
        send = requests.put(
            'https://raspberrybackend.herokuapp.com/api/raspberries/' + s, json=objToSend)
        pass
    else:"""

    send = requests.post(JSON_URL, json=objToSend)
    print(send.text)


def get_locations():  # Haetaan JSON data, jotta voidaan tarkistaa löytyykö laitetta vai ei
    with urllib.request.urlopen(JSON_URL) as response:
        return json.loads(response.read())
