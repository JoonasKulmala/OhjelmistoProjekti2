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

	//käytetään get-metodia laitteiden hakuun
	@RequestMapping(value="/results", method = RequestMethod.GET)
	public @ResponseBody List<Raspberry>getResults(){
		return (List<Raspberry>) repository.findAll();
	}
	//Käytetään post-metodia uuden laitteen lisäämiseen
	@RequestMapping(value="/api/raspberries", method = RequestMethod.POST)
	public @ResponseBody Raspberry addNewDevice(@RequestBody Raspberry raspberry) {
		repository.save(raspberry);
		return raspberry;
	}
	
	//Käytetään post-metodia uuden laitteen lisäämiseen
		@RequestMapping(value="/results", method = RequestMethod.POST)
		public @ResponseBody Raspberry addNewEntry(@RequestBody Raspberry raspberry) {
			//repository.save(raspberry);
			return raspberry;
		}
	
//	//Käytetään delete-metodia laitteen poistoon
//		@RequestMapping(value="/api/raspberries", method = RequestMethod.DELETE)
//		public @ResponseBody Raspberry removeDevice(@RequestBody Raspberry raspberry) {
//			repository.delete(raspberry);
//			return raspberry;
//		}
}
