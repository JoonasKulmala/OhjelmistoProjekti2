package Ohjelmistoprojekti2.ESP32server.domain;

public class ESP32 {
	private Long unitId;
	private String MACaddr;
	
	ESP32(String MACaddr, Long unitId) {
		this.MACaddr = MACaddr;
		this.unitId = unitId;
	}

	public Long getUnitId() {
		return unitId;
	}

	public void setUnitId(Long unitId) {
		this.unitId = unitId;
	}

	public String getMACaddr() {
		return MACaddr;
	}

	public void setMACaddr(String mACaddr) {
		MACaddr = mACaddr;
	}

	@Override
	public String toString() {
		return "ESP32 [unitId=" + unitId + ", MACaddr=" + MACaddr + "]";
	}
	
}
