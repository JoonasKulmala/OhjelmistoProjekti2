package Ohjelmistoprojekti2.ESP32server.web;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import Ohjelmistoprojekti2.ESP32server.domain.Raspberry;
import Ohjelmistoprojekti2.ESP32server.domain.RaspberryRepository;

@CrossOrigin
@Controller
public class RestController {
	
	@Autowired
	private RaspberryRepository repository;
	@Autowired
	private Raspberry raspberry;
	
	@RequestMapping(value="/results", method = RequestMethod.GET)
	public @ResponseBody List<Raspberry>getResults(){
		return (List<Raspberry>) repository.findAll();
	}
	
	@RequestMapping(value="/results", method = RequestMethod.POST)
	public @ResponseBody Raspberry addNewDevice(@RequestBody Raspberry raspberry) {
		repository.save(raspberry);
		return raspberry;
	}
	
}
