package openbracket.healthcare.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import openbracket.healthcare.domain.Appointment;
import openbracket.healthcare.domain.HealthProvider;

public interface HealthProvidersRepository extends JpaRepository<HealthProvider, Integer> {

	public List<HealthProvider> findByNameOrAddressOrSpecialityContainingAllIgnoreCase(String keywordName, String keywordAddress, String keywordSpeciality);
	public List<HealthProvider> findByPhone(String keyword);
}
