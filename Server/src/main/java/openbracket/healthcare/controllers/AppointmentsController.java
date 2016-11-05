package openbracket.healthcare.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import openbracket.healthcare.domain.Appointment;
import openbracket.healthcare.service.AppointmentsService;

@RestController
@CrossOrigin(origins = "*")
public class AppointmentsController {
	
	private AppointmentsService appointmentsService;
	
	@Autowired
	public AppointmentsController(AppointmentsService appointmentsService){
		this.appointmentsService = appointmentsService;
	}
	

	@RequestMapping("/ping")
    public String ping(@RequestParam(value="name", defaultValue="World") String name) 
	{
        return "Hello " + name;
    }
	
	// adds a new appointment to the system and returns an ID
	@RequestMapping(method = RequestMethod.POST, value = "/addNewAppointment" )
    public int addNewAppointment(@RequestBody Appointment appointment) 
	{
		appointmentsService.addAppointment(appointment);
		return appointment.getId();
    }
	
	@RequestMapping("/checkAppointment")
    public Boolean checkAppointment(@RequestParam(value="id") int id, @RequestParam(value="lastName") String lastName ) 
	{
		Appointment appointment = appointmentsService.getAppointmentById(id);
		if(appointment != null && appointment.getLastName().toUpperCase().equals(lastName.toUpperCase())){
			return true;
		}
		return false;
    }
		

}
