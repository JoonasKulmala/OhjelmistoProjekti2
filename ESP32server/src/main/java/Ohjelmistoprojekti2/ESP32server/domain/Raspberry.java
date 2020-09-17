package Ohjelmistoprojekti2.ESP32server.domain;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Raspberry {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String MACaddr;
	private String location;

	public Raspberry(){
		
	}

	public Raspberry(String location){
		this.location = location;
	}
	
	public Raspberry(String MACaddr, String location) {
		this.MACaddr = MACaddr;
		//this.id = id;
		this.location = location;
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

	@Override
	public String toString() {
		return "Raspberry [id=" + id + ", MACaddr=" + MACaddr + ", location=" + location + "]";
	}

	
	
}
