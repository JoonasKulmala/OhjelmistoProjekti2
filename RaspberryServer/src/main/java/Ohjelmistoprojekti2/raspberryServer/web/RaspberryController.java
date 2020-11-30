package Ohjelmistoprojekti2.raspberryServer.web;

import java.time.LocalDate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import Ohjelmistoprojekti2.raspberryServer.domain.Raspberry;
import Ohjelmistoprojekti2.raspberryServer.domain.RaspberryRepository;
import Ohjelmistoprojekti2.raspberryServer.domain.TimeStamp;
import Ohjelmistoprojekti2.raspberryServer.domain.TimeStampRepository;

@CrossOrigin
@Controller
public class RaspberryController {

	@Autowired
	TimeStampRepository timeRepo;
	@Autowired
	RaspberryRepository raspRepo;

	@RequestMapping(value = "/login")
	public String login() {
		return "login";
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value = "/edit/{id}", method = RequestMethod.GET) // haetaan endpointia
	public String edit(@PathVariable("id") Long id, Model model) {
		model.addAttribute("raspberry", raspRepo.findById(id));// käytetään findById-metodia haettaessa
		model.addAttribute("timeStamps", timeRepo.findAll());
		//model.addAttribute("timeStamps", new TimeStamp());
		// raspberryrepositorystä tiettyä raspberry Id-tunnuksella
		return "edit"; // edit.html palautus
	}

	// listaa raspit
	@RequestMapping(value = "/raspberrylist", method = RequestMethod.GET)
	public String getRaspberries(Model model) {
		List<Raspberry> raspberries = (List<Raspberry>) raspRepo.findAll();// haetaan tietokannasta raspit
		model.addAttribute("raspberries", raspberries); // välitetään raspilista templatelle model-olion avulla
		return "raspberrylist"; // DispatcherServlet saa tämän template-nimen ja kutsuu seuraavaksi
								// raspberrylist.html-templatea
	} // joka prosessoidaan palvelimella

	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value = "/add", method = RequestMethod.GET)
	public String addRaspForm(Model model) {
		model.addAttribute("raspberry", new Raspberry()); // "tyhjä" rasp-olio
		model.addAttribute("timeStamp", new TimeStamp());
		return "add"; // add.html palautus
	}

	// Raspin poistamiseen käytetty metodi, jossa ainoastaan käyttäjä, jolle on
	// annettu rooli ADMIN voi poistaa raspin luettelosta
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
	@PreAuthorize("hasAuthority('ADMIN')")
	public String deleteRaspberry(@PathVariable("id") Long id, Model model) {
		raspRepo.deleteById(id);
		return "redirect:../raspberrylist";
	}
	
	// lomakkeella syötettyjen tietojen vastaanotto ja tallennus
		@RequestMapping(value = "/save", method = RequestMethod.POST)
		// talletetaan yhden raspin tiedot tietokantaan
		public String saveRaspberry(@ModelAttribute Raspberry raspberry, BindingResult bindingResult, Model model) {
			if (bindingResult.hasErrors()) {
				model.addAttribute("timeStamps", timeRepo.findAll());
				System.out.println(bindingResult);
				return "add";
			}
			raspRepo.save(raspberry); // save osaa tehdä tarpeen mukaan SQL insertin tai updaten
			return "redirect:/raspberrylist";
		}
		
		@GetMapping("/")
		public String date(Model model) {
			 model.addAttribute("localDate", LocalDate.now());
			 return "date";
		}
}
