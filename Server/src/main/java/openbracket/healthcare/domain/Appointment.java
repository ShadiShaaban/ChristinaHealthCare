package openbracket.healthcare.domain;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotEmpty;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table (name="appointment")
public class Appointment {

	@Id
	@GeneratedValue
	private int Id;
	
	public Appointment(){
		
	}
	public Appointment(String firstName, String lastName, String phone, String email) {
		super();
		FirstName = firstName;
		LastName = lastName;
		Phone = phone;
		Email = email;
	}
	
	@NotEmpty
	private String FirstName;
	
	@NotEmpty
	private String LastName;
	
	@NotEmpty
	private String Phone;
	
	@NotEmpty
	private String Email;
	
	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getFirstName() {
		return FirstName;
	}
	
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String getPhone() {
		return Phone;
	}
	public void setPhone(String phone) {
		Phone = phone;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	
	
}
