package Ohjelmistoprojekti2.raspberryServer;

import Ohjelmistoprojekti2.raspberryServer.domain.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.dao.DataRetrievalFailureException;

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
	public CommandLineRunner productDemo(RaspberryRepository rRepo, DateRepository dRepo, DateListRepository dLRepo) {
		return(args) ->{
			log.info("Saving information");

			dRepo.save(new Date("Mon Sep 28 10:54:43 2020"));
			dRepo.save(new Date("Mon Sep 28 11:54:43 2020"));
			dRepo.save(new Date("Mon Sep 28 12:54:43 2020"));

			dLRepo.save(new DateList(dRepo.findById((long) 1).get()));
			dLRepo.save(new DateList(dRepo.findById((long) 2).get()));
			dLRepo.save(new DateList(dRepo.findById((long) 3).get()));
			
			Raspberry suomenlinna = new Raspberry("Suomenlinna", 5, dLRepo.findById((long) 4).get());
			Raspberry sibeliusmonumentti = new Raspberry("Sibelius-monumentti", 25, dLRepo.findById((long) 4).get());
			Raspberry rautatieasema = new Raspberry("Rautatieasema", 64, dLRepo.findById((long) 4).get());
			Raspberry presidentinlinna = new Raspberry("Presidentinlinna", 2, dLRepo.findById((long) 4).get());

			raspberryRepository.save(suomenlinna);
			raspberryRepository.save(sibeliusmonumentti);
			raspberryRepository.save(rautatieasema);
			raspberryRepository.save(presidentinlinna);
			
			log.info("Fetching data");
			for(Raspberry raspberry: rRepo.findAll()) {
				log.info(raspberry.toString());
			}
		};
	}

}
