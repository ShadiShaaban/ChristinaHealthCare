angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	

}])
   
.controller('newAppointmentCtrl', ['$scope', '$stateParams' , 'appointmentsService' , '$ionicLoading',
function ($scope, $stateParams, appointmentsService, $ionicLoading) {

	$scope.form1Data = {};
	
	$scope.$on("$ionicView.enter", function(event, data){
		// handle event
		// check if user has previously entered data to load it
		if(localStorage.getItem("newAppointmentData") != undefined){
			$scope.form1Data = JSON.parse(localStorage.getItem("newAppointmentData"));			
		}
		
	});

	$scope.createAppointment = function(){
		
		// update items in localStorage
		var newAppointmentData = $scope.form1Data;
		localStorage.setItem("newAppointmentData", JSON.stringify(newAppointmentData));
		
		console.log(newAppointmentData);
		console.log("save in localStorage: success");
		
		appointmentsService.setAppointment(newAppointmentData);
		$ionicLoading.show({ template: 'Loading...' });
		appointmentsService.addNewAppointment().then(
			function(data){				
			    localStorage.setItem("currentAppointmentId", data);
				console.log("currentAppointmentId updated to: " + data);
				location = "#/chooseProvider";				
			},
			function(error){
				alert("error happened");
			}).finally(function(){
				$ionicLoading.hide();
			});
				
	}
	
	$scope.clearForm = function(){
		$scope.form1Data = {};
	}

}])
   
.controller('manageAppointmentCtrl', ['$scope', '$stateParams',  'appointmentsService' , '$ionicLoading',
function ($scope, $stateParams, appointmentsService , $ionicLoading) {
	$scope.form = {};
	
	$scope.$on("$ionicView.enter", function(event, data){
		// handle event
		// check if user has an appointment recently
		if(localStorage.getItem("currentManageAppointmentId") != undefined){			
			$scope.form.id = parseInt(localStorage.getItem("currentManageAppointmentId"));
			$scope.form.lastName = localStorage.getItem("currentManageAppointmentLastName");					
		}		

	});
	
	$scope.checkAppointment = function(){
		$ionicLoading.show({ template: 'Loading...' });
		appointmentsService.checkAppointment($scope.form.id, $scope.form.lastName).then(
		function(data){			
			alert("Appointment was found successfully !!TODO: Manage Appointment Screen!!");
			localStorage.setItem("currentManageAppointmentId", $scope.form.id);
			localStorage.setItem("currentManageAppointmentLastName", $scope.form.lastName);
		},
		function(error){
			alert("Appointment was not found.");
		}).finally(function(){
			$ionicLoading.hide();
		});
	}

}])
      


   
.controller('chooseProviderCtrl', ['$scope', '$stateParams' , 'healthProvidersService',  '$ionicLoading',
function ($scope, $stateParams , healthProvidersService , $ionicLoading) {

	    $scope.providersList = [];
		$scope.form = {};
		$scope.changeTimeout = null;
		$scope.showSpinner = false;
		$scope.searchProviders = function(){			
			if($scope.form.keyword != ""){
				$scope.showSpinner = true;
				// reduce server load and give user more time to type
				if($scope.changeTimeout) 
					clearTimeout($scope.changeTimeout);
				$scope.changeTimeout = setTimeout(function(){
				healthProvidersService.searchByKeyword($scope.form.keyword).then(
					function(data){
						console.log(data);
						$scope.showSpinner = false;
						$scope.providersList = data;
					}, 
					function(){
						$scope.providersList = [];
					}).finally(function(){
						$scope.showSpinner = false;
					});
				}, 2000);
			}else{
				$scope.providersList = [];
			}
	    }
		
		$scope.chooseProvider = function(id){
			location = "#/scheduleAppointment/" + id;
		}

}])
   
.controller('scheduleAppointmentCtrl', ['$scope', '$stateParams', 'healthProvidersService',  '$ionicLoading',
function ($scope, $stateParams, healthProvidersService , $ionicLoading) {

	$scope.showSpinner = true;
	$scope.$on("$ionicView.enter", function(event, data){
		// handle event
		// load available times of health provider
		if(localStorage.getItem("newAppointmentData") != undefined){
			$scope.form1Data = JSON.parse(localStorage.getItem("newAppointmentData"));			
		}
		
		healthProvidersService.getTimes($stateParams.providerId).then(
			function(data){
				// TODO: set years
				// TODO: set months
				// TODO: set days
			}, 
			function(){
				alert("Error happend, unable to get available times for this health provider.");
			}
		);
		
		// items loaded
		$scope.showSpinner = false;
	});
	
	$scope.confirmAppointment = function(){
			location = "#/appointmentConfirmation";
	}

}])
   
.controller('confirmationCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {
	
	$scope.form1Data = {		
		lastName: "XXXXXX"
	};
	$scope.currentId = "#####";
	$scope.showSpinner = true;
	$scope.$on("$ionicView.enter", function(event, data){
		// handle event
		// check if user has previously entered data to load it
		if(localStorage.getItem("newAppointmentData") != undefined){
			$scope.form1Data = JSON.parse(localStorage.getItem("newAppointmentData"));
			$scope.currentId = JSON.parse(localStorage.getItem("currentAppointmentId"));	
			localStorage.setItem("currentManageAppointmentId", $scope.currentId);
			localStorage.setItem("currentManageAppointmentLastName", $scope.form1Data.lastName);					
		}		
		$scope.showSpinner = false;
	});

}])
 