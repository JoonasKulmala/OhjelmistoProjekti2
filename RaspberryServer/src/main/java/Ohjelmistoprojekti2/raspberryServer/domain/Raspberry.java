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

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "refDateRasp")
	private List<TimeStamp> timeStamp;

	public Raspberry() {
		super();
	}

	public Raspberry(String location, String latitude, String longitude) {
		super();
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public Raspberry(String location, String latitude, String longitude, String imageUrl) {
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.imageUrl = imageUrl;
	}

	// konstruktori, jossa otettu mukaan imageUrl-attribuutti
	public Raspberry(String location, String latitude, String longitude, List<TimeStamp> timeStamp, String imageUrl) {
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.timeStamp = timeStamp;
		this.imageUrl = imageUrl;
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

	public List<TimeStamp> getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(List<TimeStamp> timeStamp) {
		this.timeStamp = timeStamp;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	@Override
	public String toString() {
		return "Raspberry [id=" + id + ", location=" + location + "]";
	}

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

}
