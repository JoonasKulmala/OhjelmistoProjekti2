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
<<<<<<< HEAD
	private String foundDevices;
	@Column(name="date")
	@DateTimeFormat(pattern = "hh:mm:ss dd/mm/yyyy ")
	private LocalDate date = LocalDate.now();
=======
	private String dateAdded;
	private int foundDevices;
>>>>>>> d3ce75842119e0da68a20e63eb4cdf63000c1876

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "refDateRasp")
	private List<TimeStamp> timeStamp;

	public Raspberry() {
		super();
	}

<<<<<<< HEAD
	public Raspberry(String location, String latitude, String longitude, String imageUrl, String explanation) {
=======
	public Raspberry(String location, int foundDevices, String latitude, String longitude, String explanation) {
>>>>>>> d3ce75842119e0da68a20e63eb4cdf63000c1876
		super();
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.imageUrl = imageUrl;
		this.explanation = explanation;
	}
<<<<<<< HEAD


	public Raspberry(String location, String latitude, String longitude, String imageUrl, String explanation,
			LocalDate date) {
		super();
=======
	
	public Raspberry(String location, int foundDevices, String latitude, String longitude, String imageUrl, String explanation) {
>>>>>>> d3ce75842119e0da68a20e63eb4cdf63000c1876
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.imageUrl = imageUrl;
		this.explanation = explanation;
<<<<<<< HEAD
		this.date = date;
	}

	public Raspberry(String location, String latitude, String longitude, String imageUrl, String explanation,
			String foundDevices, LocalDate date) {
		super();
=======
	}
	
	//konstruktori, jossa otettu mukaan imageUrl-attribuutti
	public Raspberry(String location, int foundDevices, String latitude, String longitude, String imageUrl, String explanation, String dateAdded) {
>>>>>>> d3ce75842119e0da68a20e63eb4cdf63000c1876
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.imageUrl = imageUrl;
		this.explanation = explanation;
<<<<<<< HEAD
		this.foundDevices = foundDevices;
		this.date = date;
=======
		this.dateAdded = dateAdded;
>>>>>>> d3ce75842119e0da68a20e63eb4cdf63000c1876
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
	
	public String getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(String dateAdded) {
		this.dateAdded = dateAdded;
	}
	
	public int getFoundDevices() {
		return foundDevices;
	}

	public void setFoundDevices(int foundDevices) {
		this.foundDevices = foundDevices;
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
<<<<<<< HEAD

=======
	
	// lisätty toString-metodi kuvien linkkejä varten
		/*
		 * @Override public String toString() { return "Raspberry [id=" + id +
		 * ", location=" + location + ", foundDevices=" + foundDevices + ", imageUrl=" +
		 * imageUrl + ", timeStamp=" + timeStamp + "]"; }
		 */
		/*
		 * @Override public String toString() { return "Raspberry [id=" + id +
		 * ", location=" + location + ", foundDevices=" + foundDevices + ", latitude=" +
		 * latitude + ", longitude=" + longitude + ", imageUrl=" + imageUrl + "]"; }
		 */

	
>>>>>>> d3ce75842119e0da68a20e63eb4cdf63000c1876
}
