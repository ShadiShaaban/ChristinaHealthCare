package openbracket.healthcare.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import openbracket.healthcare.domain.Appointment;
import openbracket.healthcare.repository.AppointmentsRepository;

@Service
public class AppointmentsServiceImpl implements AppointmentsService {

    private final AppointmentsRepository appoitnmentsRepository;
    @Autowired
	public AppointmentsServiceImpl(AppointmentsRepository appoitnmentsRepository) {
	        this.appoitnmentsRepository = appoitnmentsRepository;	        
	}
	    
	@Override
	public void addAppointment(Appointment appointment) {
		// TODO Auto-generated method stub
		appoitnmentsRepository.save(appointment);
	}

	@Override
	public Appointment getAppointmentById(int id) {
		return appoitnmentsRepository.getOne(id);
	}	
}
