package Ohjelmistoprojekti2.raspberryServer.domain;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;

@Entity
public class TimeStamp {

	@Id // Annotaatioiden avulla luodaan jokaiselle uudelle ajalle oma id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long dateId;
	private String timeStamp;

	@JsonBackReference
	@ManyToOne
	private Raspberry refDateRasp;

	public TimeStamp() {
		super();
	}

	public TimeStamp(String timeStamp, Raspberry refDateRasp) {
		super();
		this.timeStamp = timeStamp;
		this.refDateRasp = refDateRasp;
	}

	public Long getDateId() {
		return dateId;
	}

	public void setDateId(Long dateId) {
		this.dateId = dateId;
	}

	public String getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(String timeStamp) {
		this.timeStamp = timeStamp;
	}

	public Raspberry getRefDateRasp() {
		return refDateRasp;
	}

	public void setRefDateRasp(Raspberry refDateRasp) {
		this.refDateRasp = refDateRasp;
	}

	@Override
	public String toString() {
		return "Date [dateId=" + dateId + ", date=" + timeStamp + "]";
	}
}
