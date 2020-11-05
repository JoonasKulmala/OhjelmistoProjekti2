package Ohjelmistoprojekti2.raspberryServer.domain;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Raspberry {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)

	private Long id;
	private String location;
	private int foundDevices;
	private String date;

	public Raspberry(){

	}

	public Raspberry(String location){
		this.location = location;
	}
	
	public Raspberry(String location, int foundDevices, String date) {
		this.location = location;
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

	public int getFoundDevices() {
		return foundDevices;
	}

	public void setFoundDevices(int foundDevices) {
		this.foundDevices = foundDevices;
	}

	public String getDate(){
		return date;
	}

	public void setDate(){
		this.date = date;
	}

	@Override
	public String toString() {
		return "Raspberry [id=" + id + ", location=" + location + ", foundDevices =" +foundDevices+", date =" +date+"]";
	}

	
	
}
