employeeApp.controller("employeeController",function($scope,$http,$state,$stateParams){
	
	$scope.isNumber = angular.isNumber;
	$scope.employee = {};
	$scope.editEmployeeData = $stateParams.stateParams;
	
	/***
	 * Function to get employee data from json file
	 * */
	$http.get("data.json").success(function(response){
		console.log("res========>",response);
		$scope.employees = response.data;
	})	
	
	/***
	 * Function to redirect to add Employee
	 * */
	$scope.onAddEmployee = function(){
		$state.go("employees.add");
	}
	
	/***
	 * Function to add new employee data
	 * */
	$scope.addEmp = function(){	
		console.log("new Data",$scope.employee);
		$http.post("",$scope.employee).success(function(response){
			console.log("res========>",response);
			
		})
		$scope.employee = '';
			$state.go("employees",{
				stateParams : $scope.employee
			});
	}
	
	
	/***
	 * Function to redirect to edit employee
	 * */
	
	$scope.onEditEmployee = function(data){
		$state.go("employees.edit",{
			stateParams: data,
			id: data.ID
		})
	}
	
	
	/***
	 * Function to edit employee data
	 * */
	$scope.editEmp = function(){	
		$http.post("",$scope.editEmployeeData).success(function(response){
			console.log("res========>",response);
			
		})
		$scope.employee = '';
			$state.go("employees");
	}
})