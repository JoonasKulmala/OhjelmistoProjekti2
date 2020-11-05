import schedule
import time
from bt_LE_scanner import ble_scan  # Muista vaihtaa oikeaan luokkaan


def main():
    schedule.every(5).seconds.do(ble_scan)
    while 1:
        schedule.run_pending()
        time.sleep(1)


if __name__ == "__main__":
    main()
