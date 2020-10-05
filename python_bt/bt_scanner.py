import bluetooth
import schedule
import time
import calendar
import json
import requests
import urllib.request
import socket

JSON_URL = 'https://raspberrybackend.herokuapp.com/results'


def scan():
    bt_devices = []
    print('Looking for bluetooth devices...')
    devices = bluetooth.discover_devices(lookup_names=True)
    print(type(devices))
    print("Devices found: %s" % len(devices))

    for item in devices:
        # print(item)
        if item in bt_devices:
            pass
        # elif item in bt_devices not in devices:
            # bt_devices.remove(item)
        else:
            bt_devices.append(item)

    # print(bt_devices)
    json_data = json.dumps(bt_devices)
    print(json_data)

    ts = time.time()
    readable = time.ctime(ts)
    # print(readable)

    put_url = 'https://raspberrybackend.herokuappa.com/api/raspberries/'
    location = socket.gethostname()
    addr = '00:0a:95:9d:69:69'

    objToSend = {'location': location, 'foundDevices': len(
        bt_devices)*3, 'macaddr': addr, 'date': readable}

    locations = get_locations()

    if location in locations:
        send = requests.put(put_url + location[id], json=objToSend)
    else:
        send = requests.post(JSON_URL, json=objToSend)

    print(send.text)


def get_locations():
    with urllib.request.urlopen(JSON_URL) as response:
        return json.loads(response.read())
