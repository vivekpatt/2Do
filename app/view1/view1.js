'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.controller('View1Ctrl', function($scope) {
	$scope.todoListCount=0;
	$scope.records = [{title:"DEMO NOTE",description:"WELCOME TO 2DO"}]
	// var $scope.todoList = [];
	// $scope.addTodo = function(){
	// 	$scope.todoList.unshift({title:"hello"})
	// }
	$scope.plusCount = function(){
		$scope.todoListCount++;
		console.log($scope.todoListCount);
		// $scope.addTodo();
		$scope.records.unshift({title:$scope.inputTitle,description:$scope.inputDescription});
	}
});

