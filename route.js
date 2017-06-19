var employeeApp = angular.module("employeeApp", ['ui.router']);
employeeApp.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('employees',{
		url: '/employees',
		templateUrl:'templates/employees.html',
		controller:'employeeController'
	});
	$urlRouterProvider.otherwise("/employees");
})