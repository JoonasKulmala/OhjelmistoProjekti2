package Ohjelmistoprojekti2.ESP32server.web;

public class ServerSocket {
	private int port;
	private int backlog;
	private InetAddress bindAddr;
	
	public ServerSocket(int port) {
		this.port = port;
	}
	
	public ServerSocket(int port, int backlog) {
		this.port = port;
		this.backlog = backlog;
	}
	
	public ServerSocket(int port, int backlog, InetAddress bindAddr) {
		this.port = port;
		this.backlog = backlog;
		this.bindAddr = bindAddr;
	}
	
}
