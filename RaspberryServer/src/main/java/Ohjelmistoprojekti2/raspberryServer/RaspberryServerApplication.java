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
	
	static RaspberryRepository raspberryRepository;
	static Raspberry rasp;

	final static long timeInterval = 3600000;
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
	public CommandLineRunner productDemo(RaspberryRepository rRepo, TimeStampRepository tRepo, UserRepository uRepo) {
		return (args) -> {
			log.info("Saving information");
			
			rRepo.deleteAll();
			tRepo.deleteAll();
			
			rRepo.save(new Raspberry("Suomenlinna", "60.1454","24.98814", "http://materialbank.myhelsinki.fi/deployedFiles/6559a1a744601093ae355f8d05e3a896.jpg"));
			rRepo.save(new Raspberry("Sibelius-monumentti", "60.182113","24.913422", "http://materialbank.myhelsinki.fi/deployedFiles/7e35116c75d46d11b3cb9c11c47513d7.jpg"));
			rRepo.save(new Raspberry("Rautatieasema", "60.171873","24.941422", "http://materialbank.myhelsinki.fi/deployedFiles2/0f5ca579a913dcccba04e0a24687d682.jpg" ));
			rRepo.save(new Raspberry("Presidentinlinna", "60.168389","24.956342", "https://www.presidentti.fi/wp-content/uploads/2018/08/IMG_4695-1080x560.jpg"));

			tRepo.save(new TimeStamp("Mon Sep 28 12:54:43 2020", 5, rRepo.findByLocation("Suomenlinna").get(0)));
			tRepo.save(new TimeStamp("Mon Sep 28 11:54:43 2020", 7, rRepo.findByLocation("Suomenlinna").get(0)));
            tRepo.save(new TimeStamp("Mon Sep 28 12:54:43 2020", 10, rRepo.findByLocation("Suomenlinna").get(0)));
            tRepo.save(new TimeStamp("Mon Sep 28 10:54:43 2020", 28, rRepo.findByLocation("Sibelius-monumentti").get(0)));
            tRepo.save(new TimeStamp("Mon Sep 28 11:54:43 2020", 20, rRepo.findByLocation("Sibelius-monumentti").get(0)));
            tRepo.save(new TimeStamp("Mon Sep 28 12:54:43 2020", 25, rRepo.findByLocation("Sibelius-monumentti").get(0)));
            tRepo.save(new TimeStamp("Mon Sep 28 10:54:43 2020", 64, rRepo.findByLocation("Rautatieasema").get(0)));
            tRepo.save(new TimeStamp("Mon Sep 28 11:54:43 2020", 60, rRepo.findByLocation("Rautatieasema").get(0)));
            tRepo.save(new TimeStamp("Mon Sep 28 12:54:43 2020", 67, rRepo.findByLocation("Rautatieasema").get(0)));
            tRepo.save(new TimeStamp("Mon Sep 28 10:54:43 2020", 2, rRepo.findByLocation("Presidentinlinna").get(0)));
            tRepo.save(new TimeStamp("Mon Sep 28 11:54:43 2020", 5, rRepo.findByLocation("Presidentinlinna").get(0)));
            tRepo.save(new TimeStamp("Mon Sep 28 12:54:43 2020", 3, rRepo.findByLocation("Presidentinlinna").get(0)));

            User admin = new User("admin", "$2a$04$ZVPp4IY7rkcgQjtRwUltxOh9XTZvln6QSvAjZV5Q/mA8JtXOp1vra", "admin@admin.com", "ADMIN");
            uRepo.save(admin);
            		
			log.info("Fetching data");
			for (Raspberry raspberry : rRepo.findAll()) {
				log.info(raspberry.toString());
			}
		};
	}

}
