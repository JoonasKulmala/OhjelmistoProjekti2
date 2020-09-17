import bluetooth
import schedule
import time
import json
import urllib3


def scan():
    bt_devices = []
    print('Looking for bluetooth devices...')
    devices = bluetooth.discover_devices(lookup_names=True)
    # print(type(devices))
    print("Devices found: %s" % len(devices))

    for item in devices:
        # print(item)
        if item in bt_devices:
            pass
        # elif item in bt_devices not in devices:
            # bt_devices.remove(item)
        else:
            bt_devices.append(item)

    print(bt_devices)
    json_data = json.dumps(bt_devices).encode('utf-8')
    print(json_data)
    # Kommattu pois jottei tule virheitä kun bäkki ei vielä pystyssä
    # Kun bäkki pystyssä lisää tuo .encode('utf-8) ton json_data perään
    http = urllib3.PoolManager()
    req = http.request(
        'POST',
        'raspberrybackend.herokuapp.com/results',
        body=json_data,
        headers={'Content-Type': 'application/json'}
    )
    json.loads(req.data.decode('utf-8'))['json']
