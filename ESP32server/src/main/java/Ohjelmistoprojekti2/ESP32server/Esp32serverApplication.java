package Ohjelmistoprojekti2.ESP32server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import Ohjelmistoprojekti2.ESP32server.domain.Raspberry;
import Ohjelmistoprojekti2.ESP32server.domain.RaspberryRepository;

@SpringBootApplication
public class Esp32serverApplication {

	private static final Logger log = LoggerFactory.getLogger(Esp32serverApplication.class);
	
	public static void main(String[] args) {
		SpringApplication.run(Esp32serverApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner productDemo(RaspberryRepository raspberryRepository) {
		return(args) ->{
			log.info("Saving information");
			Raspberry suomenlinna = new Raspberry( "00:0a:95:9d:68:16", "Suomenlinna");
			Raspberry sibeliusmonumentti = new Raspberry("11:0a:95:3d:69:22", "Sibeliusmonumentti");
			Raspberry rautatieasema = new Raspberry("32:5a:15:5d:65:16", "Rautatieasema");
			
			log.info("Fetching data");
			for(Raspberry raspberry: raspberryRepository.findAll()) {
				log.info(raspberry.toString());
			}
		};
	}

}
