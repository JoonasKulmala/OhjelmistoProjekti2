package Ohjelmistoprojekti2.ESP32server.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;

import Ohjelmistoprojekti2.ESP32server.domain.Raspberry;
import Ohjelmistoprojekti2.ESP32server.domain.RaspberryRepository;

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
	@RequestMapping(value="/results", method = RequestMethod.POST)
	public @ResponseBody Raspberry addNewDevice(@RequestBody Raspberry raspberry) {
		repository.save(raspberry);
		return raspberry;
	}
	
	@RequestMapping(value = "results/{id}")
    public String editRaspberry(@PathVariable("id") Long id, Model model) {
        model.addAttribute("raspberry", repository.findById(id));
        model.addAttribute("category", repository.findAll());
        return "results";
	}
	
	@RequestMapping(value = "/save", method = RequestMethod.POST)
    public String save(Raspberry raspberry) {
        repository.save(raspberry);
        return "results";
    }
}
