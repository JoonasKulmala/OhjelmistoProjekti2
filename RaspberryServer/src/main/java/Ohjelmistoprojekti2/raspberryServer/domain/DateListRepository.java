package Ohjelmistoprojekti2.raspberryServer.domain;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface DateListRepository extends CrudRepository<DateList, Long> {
    Optional<DateList> findById(Long id);//tarkista onko oikein
}