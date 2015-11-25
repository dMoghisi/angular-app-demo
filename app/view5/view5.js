'use strict';

angular.module('myApp.view5', ['ngRoute','ngMaterial','ngMessages', 'ui.bootstrap'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view5', {
            templateUrl: 'view5/view5.html',
            controller: 'View5Ctrl'
        });
    }])

    .controller('View5Ctrl', ['$scope', function($scope) {

        var vm = this;

        vm.valuationDate = new Date();
        vm.valuationDatePickerIsOpen = false;

        vm.valuationDatePickerOpen = function () {

            this.valuationDatePickerIsOpen = true;
        };

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        }
    }]);
