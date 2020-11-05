package Ohjelmistoprojekti2.raspberryServer.domain;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface DateRepository extends CrudRepository<Date, Long>{
	List<Date> findByDate(Date date);//tarkista onko oikein
}
