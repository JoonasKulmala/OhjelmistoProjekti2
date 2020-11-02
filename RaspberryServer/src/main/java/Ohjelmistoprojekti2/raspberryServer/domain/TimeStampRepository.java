package Ohjelmistoprojekti2.raspberryServer.domain;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface TimeStampRepository extends CrudRepository<TimeStamp, Long>{
	List<TimeStamp> findByTime(String time);
}
