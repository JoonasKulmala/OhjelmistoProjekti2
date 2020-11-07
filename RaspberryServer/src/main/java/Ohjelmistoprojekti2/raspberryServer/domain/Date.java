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

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "date")
	@JsonBackReference
	private List<DateList> dateList;
	
	public Date() {
		super();
	}
	
	public Date(String date) {
		super();
		this.date = date;
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

	public List<DateList> getDateList() {
		return dateList;
	}

	public void setDateList(List<DateList> dateList) {
		this.dateList = dateList;
	}

	@Override
	public String toString() {
		return "Date [dateId=" + dateId + ", date=" + date + "]";
	}
}
