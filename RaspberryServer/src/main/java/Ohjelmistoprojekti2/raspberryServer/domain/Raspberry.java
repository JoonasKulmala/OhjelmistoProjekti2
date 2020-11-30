package Ohjelmistoprojekti2.raspberryServer.domain;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Raspberry {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)

	private Long id;
	private String location;
	private String latitude;
	private String longitude;
	private String imageUrl;
	private String explanation;
	private String foundDevices;
	@Column(name="date")
	@DateTimeFormat(pattern = "hh:mm:ss dd/mm/yyyy ")
	private LocalDate date = LocalDate.now();

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "refDateRasp")
	private List<TimeStamp> timeStamp;

	public Raspberry() {
		super();
	}

	public Raspberry(String location, String latitude, String longitude, String imageUrl, String explanation) {
		super();
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.imageUrl = imageUrl;
		this.explanation = explanation;
	}


	public Raspberry(String location, String latitude, String longitude, String imageUrl, String explanation,
			LocalDate date) {
		super();
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.imageUrl = imageUrl;
		this.explanation = explanation;
		this.date = date;
	}

	public Raspberry(String location, String latitude, String longitude, String imageUrl, String explanation,
			String foundDevices, LocalDate date) {
		super();
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.imageUrl = imageUrl;
		this.explanation = explanation;
		this.foundDevices = foundDevices;
		this.date = date;
	}

	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getLocation() {
		return location;
	}



	public void setLocation(String location) {
		this.location = location;
	}



	public String getLatitude() {
		return latitude;
	}



	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}



	public String getLongitude() {
		return longitude;
	}



	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}



	public String getImageUrl() {
		return imageUrl;
	}



	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}



	public String getExplanation() {
		return explanation;
	}



	public void setExplanation(String explanation) {
		this.explanation = explanation;
	}



	public String getFoundDevices() {
		return foundDevices;
	}



	public void setFoundDevices(String foundDevices) {
		this.foundDevices = foundDevices;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public List<TimeStamp> getTimeStamp() {
		return timeStamp;
	}



	public void setTimeStamp(List<TimeStamp> timeStamp) {
		this.timeStamp = timeStamp;
	}

	@Override
	public String toString() {
		return "Raspberry [id=" + id + ", location=" + location + "]";
	}

}
