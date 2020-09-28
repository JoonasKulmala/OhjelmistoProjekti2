import bluetooth
import schedule
import time
import calendar
import json
import requests


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
    print(readable)


"""
    url = 'https://raspberrybackend.herokuapp.com/results'
    objToSend = {'location': 'LenninKone', 'foundDevices': len(
        bt_devices)*3, 'macaddr': '00:0a:95:9d:69:69', 'timestamp': ts}

    send = requests.post(url, json=objToSend)

    print(send.text)"""
