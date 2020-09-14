package Ohjelmistoprojekti2.ESP32server.web;

import java.util.ArrayList;

public class InetAddress {
	private String host;
	private byte addr;
	private ArrayList<Byte> bytes = new ArrayList<>();
	
	private InetAddress() {
		
	}
	
	//luo InetAddress-olion perustuen annettuun host-nimeen
	public String getByName(String host) {
		InetAddress inetAddr = new InetAddress();
		
		return host;
	}
	//palauttaa InetAddress-olion bytes-taulukosta
	public byte getByAddress(byte[] addr){
		return addr;
	}
	//palauttaa taulukon InetAddress-olioita perustuen tiettyyn host-nimeen
	//yksi host-nimi voi liittyä useampaan IP-osoitteeseen
	public String getAllByName(String host) {
		return host;
	}
	//palauttaa localhostin osoitteen
	public byte getLocalHost() {
		return "";
	}
	//palauttaa IP-osoitteen tekstinä
	public String getHostAddress() {
		return host;
	}
	//palauttaa hostin nimen
	public String getHostName() {
		
	}
	
	@Override
	public String toString() {
		return "InetAddress [host=" + host + ", addr=" + addr + "]";
	}
	
	
	
}
