angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider     

    .state('home', {
      url: '/home',              
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'                 
    }
  )

 
  .state('newAppointment', {
    url: '/newAppointment',
  
        templateUrl: 'templates/newAppointment.html',
        controller: 'newAppointmentCtrl'
  })

  .state('manageAppointment', {
    url: '/manageAppointment',
   
        templateUrl: 'templates/manageAppointment.html',
        controller: 'manageAppointmentCtrl'
      
  })

 
  .state('chooseProvider', {
    url: '/chooseProvider',
    templateUrl: 'templates/chooseProvider.html',
    controller: 'chooseProviderCtrl'
  })

  .state('scheduleAppointment', {
    url: '/scheduleAppointment',
    templateUrl: 'templates/scheduleAppointment.html',
    controller: 'scheduleAppointmentCtrl'
  })

  .state('confirmation', {
    url: '/appointmentConfirmation',
    templateUrl: 'templates/confirmation.html',
    controller: 'confirmationCtrl'
  })

  $urlRouterProvider.otherwise('/home')

  

});