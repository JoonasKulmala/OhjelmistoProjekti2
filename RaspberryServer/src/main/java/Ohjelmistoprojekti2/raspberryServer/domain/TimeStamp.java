package Ohjelmistoprojekti2.raspberryServer.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;


@Entity
public class TimeStamp {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private Long id;
	private String time;
	private int devices;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "raspberry")
	private List<Raspberry> raspberry;
	
	public TimeStamp() {
		super();
	}
	
	public TimeStamp(String time, int devices) {
		super();
		this.time = time;
		this.devices = devices;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public int getDevices() {
		return devices;
	}

	public void setDevices(int devices) {
		this.devices = devices;
	}

	public List<Raspberry> getRaspberry() {
		return raspberry;
	}

	public void setRaspberry(List<Raspberry> raspberry) {
		this.raspberry = raspberry;
	}

	@Override
	public String toString() {
		return "TimeStamp [id=" + id + ", time=" + time + "]";
	}

}
