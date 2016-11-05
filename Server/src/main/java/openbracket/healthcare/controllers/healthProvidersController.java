package openbracket.healthcare.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import openbracket.healthcare.domain.HealthProvider;
import openbracket.healthcare.service.HealthProvidersService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/healthProviders")
public class healthProvidersController {

	
	private HealthProvidersService healthProvidersService;
	
	@Autowired
	public healthProvidersController(HealthProvidersService healthProvidersService){
		this.healthProvidersService = healthProvidersService;
	}
	
	
	@RequestMapping("/byKeyword")
    public List<HealthProvider> byKeyword(@RequestParam(value="keyword") String keyword ) 
	{
		List<HealthProvider> resultList = healthProvidersService.findProvidersByKeyword(keyword);
		
		return resultList;
    }
		
}
