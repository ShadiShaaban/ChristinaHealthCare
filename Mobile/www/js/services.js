angular.module('app.services', [])

.service('appointmentsService', ['$http', '$q', function($http, $q){
	var baseUrl = "http://192.168.99.123:8182/";
	
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
	
}]);