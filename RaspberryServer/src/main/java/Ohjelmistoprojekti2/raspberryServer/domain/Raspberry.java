package Ohjelmistoprojekti2.raspberryServer.domain;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Raspberry {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)

	private Long id;
	private String location;
	private int foundDevices;
	
	@JsonBackReference
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "date")
	private List<Date>date;

	public Raspberry(){

	}

	public Raspberry(String location){
		this.location = location;
	}
	
	public Raspberry(String location, int foundDevices) {
		this.location = location;
		this.foundDevices = foundDevices;
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

	public List<Date> getDate(){
		return date;
	}

	public void setDate(List<Date> date){
		this.date = date;
	}

	@Override
	public String toString() {
		return "Raspberry [id=" + id + ", location=" + location + ", foundDevices =" +foundDevices+", date =" +date+"]";
	}

	
	
}
