angular.module('app.services', [])

.service('appointmentsService', ['$http', '$q', function($http, $q){
	
	
	var _appointment = {};
	
	this.setAppointment = function(appointment){
		this._appointment = appointment;
	}
	
	this.getAppointment = function(){
		return this._appointment;
	}
	
	this.addNewAppointment = function(){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: baseUrl + 'addNewAppointment',
			data: this.getAppointment()
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(err){
			deferred.reject("there was an error " + err);
		});
		return deferred.promise;
	}

	this.checkAppointment = function(id, lastName){
		var deferred = $q.defer();
		$http.get(baseUrl + 'checkAppointment', 
		{
			params : {"id": id, "lastName" : lastName }			
		}).success(function(data){
			
			if(data)
				deferred.resolve(data);
			else
		   	    deferred.reject("appointment was not found");
		}).error(function(err){
			deferred.reject("there was an error " + err);
		});
		return deferred.promise;
	}
	
}])
.service('healthProvidersService', ['$http', '$q', function($http, $q){
		

	this.searchByKeyword = function(keyword){
	
		var deferred = $q.defer();
		$http.get(baseUrl + 'healthProviders/byKeyword', 
		{
			params : {"keyword":  keyword}			
		}).success(function(data){						
		    deferred.resolve(data);			
		}).error(function(err){
			deferred.reject("there was an error " + err);
		});
		return deferred.promise;
	}
	
}]);
