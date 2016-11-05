package openbracket.healthcare.service;

import java.util.List;

import openbracket.healthcare.domain.HealthProvider;

public interface HealthProvidersService {
	public List<HealthProvider> findProvidersByKeyword(String Keyword);
}
