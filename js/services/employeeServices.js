employeeApp.service("empService",function($http){
	
	function getEmployeeData(){
		$http.get("data.json").success(function(response){
			console.log("res========>",response);
		 return response.data;
		})
	}
	return{
		getEmployeeData : getEmployeeData
	}
	
})