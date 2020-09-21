package Ohjelmistoprojekti2.ESP32server.domain;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Raspberry {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)

	private Long id;
	private String MACaddr;
	private String location;
	private int foundDevices;

	public Raspberry(){

	}

	public Raspberry(String location){
		this.location = location;
	}
	
	public Raspberry(String MACaddr, String location, int foundDevices) {
		this.MACaddr = MACaddr;
		this.location = location;
		this.foundDevices = foundDevices;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMACaddr() {
		return MACaddr;
	}

	public void setMACaddr(String mACaddr) {
		MACaddr = mACaddr;
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

	@Override
	public String toString() {
		return "Raspberry [id=" + id + ", MACaddr=" + MACaddr + ", location=" + location + "]";
	}

	
	
}
