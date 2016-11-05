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
   
.controller('manageAppointmentCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
      
.controller('formsCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {


}])
   
.controller('chooseProviderCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {


}])
   
.controller('scheduleAppointmentCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {


}])
   
.controller('confirmationCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {


}])
 