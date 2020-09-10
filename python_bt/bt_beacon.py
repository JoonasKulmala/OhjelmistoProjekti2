import bluetooth

devices = bluetooth.discover_devices(lookup_names=True)
print(type(devices))
print("Devices found: %s" % len(devices))

for item in devices:
    print(item)
