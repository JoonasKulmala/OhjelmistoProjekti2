package Ohjelmistoprojekti2.raspberryServer;

import Ohjelmistoprojekti2.raspberryServer.domain.RaspberryRepository;

public class TimedReset {
	// 3600000 millisekuntia eli tunti
	final long timeInterval = 10000;
	RaspberryRepository raspberryRepository;

	// TimedReset reset = new TimedReset() {

	public void run() {
		while (true) {
			raspberryRepository.deleteAll();
			System.out.println("Database reset");

			try {
				Thread.sleep(timeInterval);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		// }
	};
}
