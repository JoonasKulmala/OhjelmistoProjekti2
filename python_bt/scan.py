import schedule
import time
<<<<<<< HEAD
from ble_scanner import ble_scan
=======
from ble_scanner import ble_scan  # Muista vaihtaa oikeaan luokkaan
>>>>>>> bf425731dc9f86e8ba290060cea0f8f1f5595e3f


def main():
    schedule.every(5).seconds.do(ble_scan)
    while 1:
        schedule.run_pending()
        time.sleep(5)


if __name__ == "__main__":
    main()
