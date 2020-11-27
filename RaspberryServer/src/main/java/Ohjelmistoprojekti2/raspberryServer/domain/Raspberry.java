package Ohjelmistoprojekti2.raspberryServer.domain;
import java.util.List;

import javax.persistence.*;

@Entity
public class Raspberry {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)

	private Long id;
	private String location;
	private int foundDevices; //->Result
	private String latitude;
	private String longitude;
	private String imageUrl;
	private String explanation;


	@OneToMany(cascade = CascadeType.ALL, mappedBy = "refDateRasp")
	private List<TimeStamp> timeStamp; // Change to: dateAdded

	public Raspberry(){
		super();
	}

	public Raspberry(String location, int foundDevices, String latitude, String longitude, String explanation) {
		super();
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
	}
	
	public Raspberry(String location, int foundDevices, String latitude, String longitude, String imageUrl, String explanation) {
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.imageUrl = imageUrl;
	}
	
	//konstruktori, jossa otettu mukaan imageUrl-attribuutti
	public Raspberry(String location, int foundDevices, String latitude, String longitude, List<TimeStamp> timeStamp, String imageUrl, String explanation) {
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.timeStamp = timeStamp;
		this.imageUrl = imageUrl;
		this.explanation = explanation;
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

//	public int getFoundDevices()  {
//		return foundDevices;
//	}
//
//	public void setFoundDevices(int foundDevices) {
//		this.foundDevices = foundDevices;
//	}

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
	
	public String getExplanation() {
		return explanation;
	}

	public void setExplanation(String explanation) {
		this.explanation = explanation;
	}

	@Override
	public String toString() {
		return "Raspberry [id=" + id + ", location=" + location + "]";
	}
	
}
