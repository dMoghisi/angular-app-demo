'use strict';

var view1App = angular.module('myApp.view1', ['ngRoute'])

view1App.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

view1App.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
	$scope.employees = {};
	$http.get('view1/employees.json').success(function(data){
		$scope.employees = data;
	});
	$scope.order = 'name';
}]);