var employeeApp = angular.module("employeeApp", ['ui.router']);
employeeApp.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('employees',{
	params:{
			stateParams: null,
			id: null
		},
		url: '/employees',
		templateUrl:'templates/employees.html',
		controller:'employeeController'
	})
	.state("employees.add",{
	params:{
			stateParams: null,
			id: null
		},
		url:'/add',
		templateUrl:'templates/addEmployee.html',
		controller:'employeeController'
	})
	.state("employees.edit",{
		params:{
			stateParams: null,
			id: null
		},
		url:'/:id/edit',
		templateUrl:'templates/editEmployee.html',
		controller:'employeeController'
		
	})
	$urlRouterProvider.otherwise("/employees");
})