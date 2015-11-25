'use strict';

angular.module('myApp.view1', ['ngRoute','ngAnimate','ui.bootstrap'])

		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/view1', {
				templateUrl: 'view1/view1.html',
				controller: 'View1Ctrl'
			});
		}])

		.controller('View1Ctrl', ['$scope','$http', '$uibModal', '$log', function( $scope, $http, $uibModal, $log) {
			$scope.showDetails = false;
            $scope.employees = [];

            $scope.animationsEnabled = true;

            $scope.open = function (size, member) {

                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'myModalContent.html',
                    controller: 'ModalInstanceCtrl',
                    size: size,
                    resolve: {
                        member: function () {
                            return member;
                        },
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                    $scope.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };

            $scope.toggleAnimation = function () {
                $scope.animationsEnabled = !$scope.animationsEnabled;
            };

            $http.get('view1/employees.json')
                    .success(function(data){
                        $scope.employees = data;
                    });
            $scope.order = 'lastName';
        }])
    .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, member) {
        $scope.member = member;
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });