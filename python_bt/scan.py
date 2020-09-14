import schedule
import time
from bt_scanner import scan


def main():
    schedule.every(2).seconds.do(scan)
    while 1:
        schedule.run_pending()
        time.sleep(1)


if __name__ == "__main__":
    main()
