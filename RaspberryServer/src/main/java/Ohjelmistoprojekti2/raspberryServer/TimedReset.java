package Ohjelmistoprojekti2.raspberryServer;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Component;

import Ohjelmistoprojekti2.raspberryServer.domain.RaspberryRepository;

//@Component
public class TimedReset {
	/*// 3600000 millisekuntia eli tunti
	final long timeInterval = 300000;
	RaspberryRepository raspberryRepository;

	//@PostConstruct annotaatiolla saadaan käynnistettyä runReset-metodi beanin käynnistyksen jälkeen
	//@PostConstruct
	public void runReset() {
		
		while (true) {
			if(raspberryRepository != null) {
				raspberryRepository.deleteAll();
				System.out.println("Database reset");
			}else {
				System.out.println("Database already empty");
			}
			

			try {
				Thread.sleep(timeInterval);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	};*/
	
	
	
}
