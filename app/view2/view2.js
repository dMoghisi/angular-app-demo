'use strict';

var view2App = angular.module('myApp.view2', [ 'ngRoute']);

view2App.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}]);

view2App.controller('View2Ctrl', [function() {
}]);