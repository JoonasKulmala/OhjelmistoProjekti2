package Ohjelmistoprojekti2.raspberryServer.domain;


import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;

@Entity
public class Date {
	
	@Id//Annotaatioiden avulla luodaan jokaiselle uudelle ajalle oma id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long dateId;
	private String date;

	@JsonBackReference
	@ManyToOne
	private Raspberry refDateRasp;
	
	public Date() {
		super();
	}
	
	public Date(String date, Raspberry refDateRasp) {
		super();
		this.date = date;
		this.refDateRasp = refDateRasp;
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

	public Raspberry getRefDateRasp() {
		return refDateRasp;
	}

	public void setRefDateRasp(Raspberry refDateRasp) {
		this.refDateRasp = refDateRasp;
	}

	@Override
	public String toString() {
		return "Date [dateId=" + dateId + ", date=" + date + "]";
	}
}
