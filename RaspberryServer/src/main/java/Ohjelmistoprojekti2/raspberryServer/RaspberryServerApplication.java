package Ohjelmistoprojekti2.raspberryServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.dao.DataRetrievalFailureException;

import Ohjelmistoprojekti2.raspberryServer.domain.Date;
import Ohjelmistoprojekti2.raspberryServer.domain.DateRepository;
import Ohjelmistoprojekti2.raspberryServer.domain.Raspberry;
import Ohjelmistoprojekti2.raspberryServer.domain.RaspberryRepository;

@SpringBootApplication
public class RaspberryServerApplication {
	//static TimedReset reset;
	static RaspberryRepository raspberryRepository;
	
	  final static long timeInterval = 300000;
	  static Runnable runnable = new Runnable() {
	  
	  public void run() {
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
	    }
	  };
	  
	  static Thread thread = new Thread(runnable);

	
	private static final Logger log = LoggerFactory.getLogger(RaspberryServerApplication.class);
	
	public static void main(String[] args) {
		SpringApplication.run(RaspberryServerApplication.class, args);
		thread.start();
	}
	
	@Bean
	public CommandLineRunner productDemo(RaspberryRepository raspberryRepository, DateRepository dRepo) {
		return(args) ->{
			log.info("Saving information");
			
			Raspberry suomenlinna = new Raspberry("Suomenlinna", 5);
			Raspberry sibeliusmonumentti = new Raspberry("Sibelius-monumentti", 25);
			Raspberry rautatieasema = new Raspberry("Rautatieasema", 64);
			Raspberry presidentinlinna = new Raspberry("Presidentinlinna", 2);

			raspberryRepository.save(suomenlinna);
			raspberryRepository.save(sibeliusmonumentti);
			raspberryRepository.save(rautatieasema);
			raspberryRepository.save(presidentinlinna);
			
			Date date1 = new Date("Mon Sep 28 10:54:43 2020", raspberryRepository.findByLocation("Suomenlinna").get(0));
			Date date2 = new Date("Mon Sep 28 11:54:43 2020", raspberryRepository.findByLocation("Suomenlinna").get(0));
			Date date3 = new Date("Mon Sep 28 12:54:43 2020", raspberryRepository.findByLocation("Suomenlinna").get(0));
			
			dRepo.save(date1);
			dRepo.save(date2);
			dRepo.save(date3);
			
			log.info("Fetching data");
			for(Raspberry raspberry: raspberryRepository.findAll()) {
				log.info(raspberry.toString());
			}
		};
	}

}
