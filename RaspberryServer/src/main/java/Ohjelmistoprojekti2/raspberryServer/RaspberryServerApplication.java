package Ohjelmistoprojekti2.raspberryServer;

import Ohjelmistoprojekti2.raspberryServer.domain.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RaspberryServerApplication {
	// static TimedReset reset;
	static RaspberryRepository raspberryRepository;

	final static long timeInterval = 300000;
	static Runnable runnable = new Runnable() {

		public void run() {

			while (true) {
				if (raspberryRepository != null) {
					raspberryRepository.deleteAll();
					System.out.println("Database reset");
				} else {
					System.out.println("Database already empty");
				}
				try {
					Thread.sleep(timeInterval);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}
	};

	static Thread thread = new Thread(runnable);

	private static final Logger log = LoggerFactory.getLogger(RaspberryServerApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(RaspberryServerApplication.class, args);
		thread.start();
	}

	@Bean
	public CommandLineRunner productDemo(RaspberryRepository rRepo, TimeStampRepository tRepo) {
		return (args) -> {
			log.info("Saving information");
			
			rRepo.deleteAll();
			tRepo.deleteAll();
			
			rRepo.save(new Raspberry("Suomenlinna", 5, "60.1454","24.98814"));
			rRepo.save(new Raspberry("Sibelius-monumentti", 25, "60.182113","24.913422"));
			rRepo.save(new Raspberry("Rautatieasema", 64, "60.171873","24.941422" ));
			rRepo.save(new Raspberry("Presidentinlinna", 2, "60.168389","24.956342"));

			tRepo.save(new TimeStamp("Mon Sep 28 11:54:43 2020", rRepo.findById((long) 1).get()));
			tRepo.save(new TimeStamp("Mon Sep 28 12:54:43 2020", rRepo.findById((long) 1).get()));
			tRepo.save(new TimeStamp("Mon Sep 28 13:54:43 2020", rRepo.findById((long) 1).get()));
			tRepo.save(new TimeStamp("Mon Sep 28 10:54:43 2020", rRepo.findById((long) 2).get()));
			tRepo.save(new TimeStamp("Mon Sep 28 11:54:43 2020", rRepo.findById((long) 2).get()));
			tRepo.save(new TimeStamp("Mon Sep 28 12:54:43 2020", rRepo.findById((long) 2).get()));
			tRepo.save(new TimeStamp("Mon Sep 28 10:54:43 2020", rRepo.findById((long) 3).get()));
			tRepo.save(new TimeStamp("Mon Sep 28 11:54:43 2020", rRepo.findById((long) 3).get()));
			tRepo.save(new TimeStamp("Mon Sep 28 12:54:43 2020", rRepo.findById((long) 3).get()));
			tRepo.save(new TimeStamp("Mon Sep 28 10:54:43 2020", rRepo.findById((long) 4).get()));
			tRepo.save(new TimeStamp("Mon Sep 28 11:54:43 2020", rRepo.findById((long) 4).get()));
			tRepo.save(new TimeStamp("Mon Sep 28 12:54:43 2020", rRepo.findById((long) 4).get()));
			
	/*
			 * rRepo.deleteAll(); tRepo.deleteAll();
			 * 
			 * rRepo.save(new Raspberry("Suomenlinna", 5, "60.1454", "24.98814"));
			 * rRepo.save(new Raspberry("Sibelius-monumentti", 25, "60.182113",
			 * "24.913422")); rRepo.save(new Raspberry("Rautatieasema", 64, "60.171873",
			 * "24.941422")); rRepo.save(new Raspberry("Presidentinlinna", 2, "60.168389",
			 * "24.956342"));
			 * 
			 * tRepo.save(new TimeStamp("Mon Sep 28 11:54:43 2020", rRepo.findById((long)
			 * 1).get())); tRepo.save(new TimeStamp("Mon Sep 28 12:54:43 2020",
			 * rRepo.findById((long) 1).get())); tRepo.save(new
			 * TimeStamp("Mon Sep 28 13:54:43 2020", rRepo.findById((long) 1).get()));
			 * tRepo.save(new TimeStamp("Mon Sep 28 10:54:43 2020", rRepo.findById((long)
			 * 2).get())); tRepo.save(new TimeStamp("Mon Sep 28 11:54:43 2020",
			 * rRepo.findById((long) 2).get())); tRepo.save(new
			 * TimeStamp("Mon Sep 28 12:54:43 2020", rRepo.findById((long) 2).get()));
			 * tRepo.save(new TimeStamp("Mon Sep 28 10:54:43 2020", rRepo.findById((long)
			 * 3).get())); tRepo.save(new TimeStamp("Mon Sep 28 11:54:43 2020",
			 * rRepo.findById((long) 3).get())); tRepo.save(new
			 * TimeStamp("Mon Sep 28 12:54:43 2020", rRepo.findById((long) 3).get()));
			 * tRepo.save(new TimeStamp("Mon Sep 28 10:54:43 2020", rRepo.findById((long)
			 * 4).get())); tRepo.save(new TimeStamp("Mon Sep 28 11:54:43 2020",
			 * rRepo.findById((long) 4).get())); tRepo.save(new
			 * TimeStamp("Mon Sep 28 12:54:43 2020", rRepo.findById((long) 4).get()));
			 */

			log.info("Fetching data");
			for (Raspberry raspberry : rRepo.findAll()) {
				log.info(raspberry.toString());
			}
		};
	}

}
