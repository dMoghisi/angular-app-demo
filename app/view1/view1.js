'use strict';

angular.module('myApp.view1', ['ngRoute'])

		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/view1', {
				templateUrl: 'view1/view1.html',
				controller: 'View1Ctrl'
			});
		}])

		.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
			$scope.showDetails = false;
            $scope.employees = [];
            $http.get('view1/employees.json')
                    .success(function(data){
                        $scope.employees = data;
                    });
            $scope.order = 'lastName';
            $scope.toggleDetails = function (employee) {
                $scope.showDetails = !$scope.showDetails;
                alert("First Name: " + employee.firstName +
                        "\nLast Name: " + employee.lastName +
                        "\nPhone: " + employee.phone);
            };
        }]);