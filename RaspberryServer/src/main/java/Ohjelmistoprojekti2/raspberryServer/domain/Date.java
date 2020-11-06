package Ohjelmistoprojekti2.raspberryServer.domain;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Date {
	
	@Id//Annotaatioiden avulla luodaan jokaiselle uudelle ajalle oma id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long dateId;
	private String date;
	
	@ManyToOne
	@JsonManagedReference
	@JoinColumn(name = "id")
	private Raspberry raspberry;
	
	public Date() {
		super();
	}
	
	public Date(String date, Raspberry raspberry) {
		super();
		this.date = date;
		this.raspberry = raspberry;
	}

	public Long getDateId() {
		return dateId;
	}

	public void setDateId(Long dateId) {
		this.dateId = dateId;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Raspberry getRaspberry() {
		return raspberry;
	}

	public void setRaspberry(Raspberry raspberry) {
		this.raspberry = raspberry;
	}

	@Override
	public String toString() {
		return "Date [dateId=" + dateId + ", date=" + date + "]";
	}
}
