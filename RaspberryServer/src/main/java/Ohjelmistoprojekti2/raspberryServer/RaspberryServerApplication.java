package Ohjelmistoprojekti2.raspberryServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import Ohjelmistoprojekti2.raspberryServer.domain.Raspberry;
import Ohjelmistoprojekti2.raspberryServer.domain.RaspberryRepository;

@SpringBootApplication
public class RaspberryServerApplication {
	static TimedReset reset;
	
	private static final Logger log = LoggerFactory.getLogger(RaspberryServerApplication.class);
	
	public static void main(String[] args) {
		SpringApplication.run(RaspberryServerApplication.class, args);
		reset.run();
	}
	
	@Bean
	public CommandLineRunner productDemo(RaspberryRepository raspberryRepository) {
		return(args) ->{
			log.info("Saving information");
			Raspberry suomenlinna = new Raspberry("Suomenlinna", 5, "Mon Sep 28 10:54:43 2020", "60.1454,24.98814");
			Raspberry sibeliusmonumentti = new Raspberry("Sibelius-monumentti", 25, "Mon Sep 28 10:54:43 2020", "60.182113,24.913422");
			Raspberry rautatieasema = new Raspberry("Rautatieasema", 64, "Mon Sep 28 10:54:43 2020", "60.171873,24.941422");
			Raspberry presidentinlinna = new Raspberry("Presidentinlinna", 2, "Mon Sep 28 10:54:43 2020", "60.168389,24.956342");

			raspberryRepository.save(suomenlinna);
			raspberryRepository.save(sibeliusmonumentti);
			raspberryRepository.save(rautatieasema);
			raspberryRepository.save(presidentinlinna);
			
			log.info("Fetching data");
			for(Raspberry raspberry: raspberryRepository.findAll()) {
				log.info(raspberry.toString());
			}
		};
	}

}
