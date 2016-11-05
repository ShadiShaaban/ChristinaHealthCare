package openbracket.healthcare.service;

import static org.mockito.Matchers.intThat;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import openbracket.healthcare.domain.HealthProvider;
import openbracket.healthcare.repository.AppointmentsRepository;
import openbracket.healthcare.repository.HealthProvidersRepository;

@Service
public class HealthProviderServiceImpl implements HealthProvidersService {

	private final HealthProvidersRepository healthProvidersRepository;
    
	@Autowired
	public HealthProviderServiceImpl(HealthProvidersRepository healthProvidersRepository) {
	        this.healthProvidersRepository = healthProvidersRepository;	        
	}
	    
	@Override
	public List<HealthProvider> findProvidersByKeyword(String keyword) {
		// TODO Auto-generated method stub	  

	      // Create a Pattern object
	      Pattern r = Pattern.compile("\\d{7,}");

	      // Now create matcher object.
	      Matcher m = r.matcher(keyword);
	      if (m.matches()) {
	    	  return healthProvidersRepository.findByPhone(keyword);
	      }else{
	    	  return healthProvidersRepository.findByNameOrAddressOrSpecialityContainingAllIgnoreCase(keyword, keyword, keyword);
	      }
	}

}
