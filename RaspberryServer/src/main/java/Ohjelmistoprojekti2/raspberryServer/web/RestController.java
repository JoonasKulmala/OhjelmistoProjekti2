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

import org.springframework.ui.Model;

@CrossOrigin
@Controller
public class RestController {
	
	@Autowired
	private RaspberryRepository repository;

	//Tallennettujen tulosten haku kannasta GET-metodilla
	@RequestMapping(value="/results", method = RequestMethod.GET)
	public @ResponseBody List<Raspberry>getResults(){
		return (List<Raspberry>) repository.findAll();
	}
	
	//Tallennettujen laitteiden haku kannasta GET-metodilla
	@RequestMapping(value="/api/raspberries", method = RequestMethod.GET)
	public @ResponseBody List<Raspberry>getRaspberries(){
		return (List<Raspberry>) repository.findAll();
	}
		
	//Tallennetun tuloksen lisääminen kantaan POST-metodilla
	@RequestMapping(value="/results", method = RequestMethod.POST)
	public @ResponseBody Raspberry addNewEntry(@RequestBody Raspberry raspberry) {
		repository.save(raspberry);													// TO DO: uusi repo
		return raspberry;
	}
	
	//Uuden laitteen lisääminen kantaan POST-metodilla
	@RequestMapping(value="/api/raspberries", method = RequestMethod.POST)
	public @ResponseBody Raspberry addNewDevice(@RequestBody Raspberry raspberry) {
		repository.save(raspberry);
		return raspberry;
	}
	
//	//Tallennetun laitteen poistaminen kannasta DELETE-metodilla							// TO DO: metodi
//		@RequestMapping(value="/api/raspberries", method = RequestMethod.DELETE)
//		public @ResponseBody Raspberry removeDevice(@RequestBody Raspberry raspberry) {
//			repository.delete(raspberry);
//			return raspberry;
//		}
}
