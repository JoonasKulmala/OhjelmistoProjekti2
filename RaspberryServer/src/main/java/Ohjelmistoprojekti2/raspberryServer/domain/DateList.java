package Ohjelmistoprojekti2.raspberryServer.domain;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
public class DateList {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long dateListId;

    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "dateId")
    private Date date;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "dateListId")
    @JsonBackReference
    private List<Raspberry> raspberries;

    public DateList() {
        super();
    }

    public DateList(Date date) {
        super();
        this.date = date;
    }

    public Long getDateListId() {
        return dateListId;
    }

    public void setDateListId(Long dateListId) {
        this.dateListId = dateListId;
    }

    public List<Raspberry> getRaspberries() {
        return raspberries;
    }

    public void setRaspberries(List<Raspberry> raspberries) {
        this.raspberries = raspberries;
    }

    @Override
    public String toString() {
        return "DateList{" +
                "dateListId=" + dateListId +
                ", date=" + date +
                ", raspberries=" + raspberries +
                '}';
    }
}