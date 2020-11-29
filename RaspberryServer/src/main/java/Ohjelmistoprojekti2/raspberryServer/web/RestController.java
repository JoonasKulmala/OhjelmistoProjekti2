package Ohjelmistoprojekti2.raspberryServer.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import Ohjelmistoprojekti2.raspberryServer.domain.Raspberry;
import Ohjelmistoprojekti2.raspberryServer.domain.RaspberryRepository;
import Ohjelmistoprojekti2.raspberryServer.domain.Result;
import Ohjelmistoprojekti2.raspberryServer.domain.ResultRepository;

import org.springframework.ui.Model;

@CrossOrigin
@Controller
public class RestController {

	@Autowired
	private RaspberryRepository repository;
	@Autowired
	private ResultRepository repository2;

	// Hakee kaikki nykyiset TULOKSET tietokannasta
	@RequestMapping(value="/api/results", method = RequestMethod.GET)
	public @ResponseBody List<Result>getResults(){
		return (List<Result>) repository2.findAll();
	}
	
	// Hakee kaikki nykyiset LAITTEET tietokannasta
	@RequestMapping(value="/api/raspberries", method = RequestMethod.GET)
	public @ResponseBody List<Raspberry>getRaspberries(){
		return (List<Raspberry>) repository.findAll();
	}
	
	@CrossOrigin
  	@RequestMapping(value = "/api/raspberries/{location}", method = RequestMethod.GET)
  	public @ResponseBody  List<Raspberry> findSingleRaspberry(@PathVariable String location) { 
  		return repository.findByLocation(location); 
  	}
		
	// Lisää uuden TULOKSEN
	@RequestMapping(value="/api/results", method = RequestMethod.POST)
	public @ResponseBody Result addNewResult(@RequestBody Result result) {
		repository2.save(result);													// TO DO: uusi repo
		return result;
	}
	
	// Lisää uuden LAITTEEN
	@RequestMapping(value="/api/raspberries", method = RequestMethod.POST)
	public @ResponseBody Raspberry addNewRaspberry(@RequestBody Raspberry raspberry) {
		repository.save(raspberry);
		return raspberry;
	}
	
//	// Poistaa tallennetun LAITTEEN tietokannasta
//		@RequestMapping(value="/api/raspberries", method = RequestMethod.DELETE)
//		public @ResponseBody Raspberry removeDevice(@RequestBody Raspberry raspberry) {
//			repository.delete(raspberry);
//			return raspberry;
//		}
}
