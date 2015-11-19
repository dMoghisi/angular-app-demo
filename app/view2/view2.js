'use strict';


// create angular app
var validationApp = angular.module('myApp.view2', ['ngRoute']);

validationApp.config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      });
    }]);

// create angular controller
validationApp.controller('mainController', function($scope) {

    // function to submit the form after all validation has occurred
    $scope.submitForm = function() {

        // check to make sure the form is completely valid
        if ($scope.userForm.$valid) {
            alert('our form is amazing');
        }

    };

});