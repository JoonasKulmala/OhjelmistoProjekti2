import schedule
import time
from ble_scanner import ble_scan


def main():
    schedule.every(5).seconds.do(ble_scan)
    while 1:
        schedule.run_pending()
        time.sleep(5)


if __name__ == "__main__":
    main()
