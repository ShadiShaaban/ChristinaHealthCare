package openbracket.healthcare.domain;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;


@Entity
@Table (name="health_provider")
public class HealthProvider {

	@Id
	@GeneratedValue
	private int id;

	@NotEmpty
	private String name; 
	
	@NotEmpty
	private String address;
	
	@NotEmpty
	private String speciality;
	
	@NotEmpty
	private String phone;

	public HealthProvider(){
	}
	
	public HealthProvider(String name, String address, String phone) {		
		this.name = name;
		this.address = address;
		this.phone = phone;
	}

	
	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	
}
