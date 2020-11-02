package Ohjelmistoprojekti2.raspberryServer.domain;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Date {
	private LocalDateTime date =  LocalDateTime.now();
	
	@Id//Annotaatioiden avulla luodaan jokaiselle uudelle ajalle oma id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long dateId;
	
	//@JsonBackReference
	//@OneToMany(cascade = CascadeType.ALL, mappedBy = "date")
	//private List<Raspberry>berries;
	
	public Date() {
		
	}
	public Date(LocalDateTime date) {
		this.date = date;
	}
	
	public Date(Long dateid, LocalDateTime date) {
		this.date = date;
		this.dateId = dateId;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Date [date=" + date + "]";
	}
	
}
