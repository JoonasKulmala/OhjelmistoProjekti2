package Ohjelmistoprojekti2.raspberryServer.domain;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface DateRepository extends CrudRepository<Date, Long>{
	List<Date> findByDate(String date);//tarkista onko oikein
}
