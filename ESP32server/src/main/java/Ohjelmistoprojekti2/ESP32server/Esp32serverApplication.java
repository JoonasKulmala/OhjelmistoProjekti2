package Ohjelmistoprojekti2.ESP32server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
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
			Raspberry suomenlinna = new Raspberry( "00:0a:95:9d:68:16", "Suomenlinna", 5);
			Raspberry sibeliusmonumentti = new Raspberry("11:0a:95:3d:69:22", "Sibelius-monumentti", 25);
			Raspberry rautatieasema = new Raspberry("32:5a:15:5d:65:16", "Rautatieasema", 64);
			Raspberry presidentinlinna = new Raspberry("54:1a:22:5d:65:88", "Presidentinlinna", 2);
			Raspberry temppeliaukionKirkko = new Raspberry("01:0a:25:5a:75:16", "Temppeliaukion kirkko", 210);
			Raspberry helsinginTuomiokirkko = new Raspberry("11:1a:11:1d:11:11", "Helsingin tuomiokirkko", 45);
			Raspberry kauppatori = new Raspberry("22:6a:33:1a:65:16", "Kauppatori", 89);
			Raspberry senaatintori = new Raspberry("98:7a:65:4d:32:10", "Senaatintori", 52);

			raspberryRepository.save(suomenlinna);
			raspberryRepository.save(sibeliusmonumentti);
			raspberryRepository.save(rautatieasema);
			raspberryRepository.save(presidentinlinna);
			raspberryRepository.save(temppeliaukionKirkko);
			raspberryRepository.save(helsinginTuomiokirkko);
			raspberryRepository.save(kauppatori);
			raspberryRepository.save(senaatintori);
			
			log.info("Fetching data");
			for(Raspberry raspberry: raspberryRepository.findAll()) {
				log.info(raspberry.toString());
			}
		};
	}

}
