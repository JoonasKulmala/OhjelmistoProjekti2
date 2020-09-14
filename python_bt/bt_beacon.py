import bluetooth
import schedule
import time


def scan():
    devices = bluetooth.discover_devices(lookup_names=True)
    print(type(devices))
    print("Devices found: %s" % len(devices))

    for item in devices:
        print(item)


schedule.every(2).seconds.do(scan)

while 1:
    schedule.run_pending()
    time.sleep(1)
