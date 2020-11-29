package Ohjelmistoprojekti2.raspberryServer.domain;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class TimeStamp {

	@Id // Annotaatioiden avulla luodaan jokaiselle uudelle ajalle oma id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long dateId;
	private String timeStamp;
	private int foundDevices;
	//private int foundDevices;

	@JsonBackReference
	@ManyToOne
	private Raspberry refDateRasp;

	public TimeStamp() {
		super();
	}
	
	public TimeStamp(String timeStamp, int foundDevices, Raspberry refDateRasp) {
		super();
		this.timeStamp = timeStamp;
		this.foundDevices = foundDevices;
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

	public int getFoundDevices() {
		return foundDevices;
	}

	public void setFoundDevices(int foundDevices) {
		this.foundDevices = foundDevices;
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

//	public int getFoundDevices() {
//		return foundDevices;
//	}
//
//	public void setFoundDevices(int foundDevices) {
//		this.foundDevices = foundDevices;
//	}
}
