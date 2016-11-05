package openbracket.healthcare.service;

import openbracket.healthcare.domain.Appointment;

public interface AppointmentsService {

	public void addAppointment(Appointment appointment);
	public Appointment getAppointmentById(int id);
}
