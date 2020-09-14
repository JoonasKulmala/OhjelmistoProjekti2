package Ohjelmistoprojekti2.ESP32server.domain;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface RaspberryRepository extends CrudRepository<Raspberry, Long>{
	List<Raspberry>findByName(String name);
}
