package Ohjelmistoprojekti2.raspberryServer.domain;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface RaspberryRepository extends CrudRepository<Raspberry, Long>{
	List<Raspberry>findByLocation(String location);
}
