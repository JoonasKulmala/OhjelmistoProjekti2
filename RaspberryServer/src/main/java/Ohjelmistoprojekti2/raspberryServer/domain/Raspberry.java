package Ohjelmistoprojekti2.raspberryServer.domain;

import java.util.List;

import javax.persistence.*;


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
	private String dateAdded;
	private int foundDevices;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "refDateRasp")
	private List<TimeStamp> timeStamp;

	public Raspberry() {
		super();
	}

	public Raspberry(String location, int foundDevices, String latitude, String longitude, String explanation) {
		super();
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.imageUrl = imageUrl;
		this.explanation = explanation;
	}

	public Raspberry(String location, int foundDevices, String latitude, String longitude, String imageUrl,
			String explanation) {
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.imageUrl = imageUrl;
		this.explanation = explanation;
	}

	// konstruktori, jossa otettu mukaan imageUrl-attribuutti
	public Raspberry(String location, int foundDevices, String latitude, String longitude, String imageUrl,
			String explanation, String dateAdded) {
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.imageUrl = imageUrl;
		this.explanation = explanation;
		this.dateAdded = dateAdded;
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

	public String getDate() {
		return dateAdded;
	}

	public void setDate(String dateAdded) {
		this.dateAdded = dateAdded;
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