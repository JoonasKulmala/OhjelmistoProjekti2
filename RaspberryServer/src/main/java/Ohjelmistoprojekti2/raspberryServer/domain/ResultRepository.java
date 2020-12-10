package Ohjelmistoprojekti2.raspberryServer.domain;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface ResultRepository extends CrudRepository<Result, Long> {
	List<Result> findByLocation(String location);
}