employeeApp.controller("employeeController",function($scope,$http){
	console.log("within fun")
	$scope.isNumber = angular.isNumber;
	$http.get("data.json").success(function(response){
		console.log("res========>",response);
		$scope.employees = response.data;
	})
	
})