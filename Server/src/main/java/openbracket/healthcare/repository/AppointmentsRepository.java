package openbracket.healthcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import openbracket.healthcare.domain.Appointment;

public interface AppointmentsRepository extends JpaRepository<Appointment, Integer> {

}
