package Ohjelmistoprojekti2.raspberryServer.domain;
import java.util.List;

import javax.persistence.*;

@Entity
public class Result {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)

	private Long id;
	private int foundDevices;
	private String location;
	private String latitude;
	private String longitude;
	private String imageUrl;
	private String explanation;
	private String timestamp;


	@OneToMany(cascade = CascadeType.ALL, mappedBy = "refDateRasp")
	private List<TimeStamp> timeStamp;

	public Result(){
		super();
	}

	public Result(String location, String latitude, String longitude, String imageUrl, String explanation, int foundDevices) {
		super();
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.imageUrl = imageUrl;
	}
	//tämäkö??? preadded data entry
	public Result(String location, int foundDevices, String latitude, String longitude, String imageUrl, String explanation, String timestamp) {
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.imageUrl = imageUrl;
		this.foundDevices = foundDevices;
		this.explanation = explanation;
		this.timestamp = timestamp;
	}
	
	public Result(Long id, String location, int foundDevices, String latitude, String longitude, String imageUrl, String explanation) {
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.imageUrl = imageUrl;
	}

	public Long getId() {
		 return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<TimeStamp> getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(List<TimeStamp> timeStamp) {
		this.timeStamp = timeStamp;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	
	public int getFoundDevices()  {
		return foundDevices;
	}

	public void setFoundDevices(int foundDevices) {
		this.foundDevices = foundDevices;
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
	
	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}

//	public String getTimestamp() {
//		return timestamp;
//	}
//
//	public void setTimestamp(String timestamp) {
//		this.timestamp = timestamp;
//	}
	
	@Override
	public String toString() {
		return "Result [id=" + id + ", location =" +location+"]";
	}
	
}