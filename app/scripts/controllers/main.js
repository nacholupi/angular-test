'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var tareasEnAlmacen = localStorageService.get('tareas');
    $scope.tareas = tareasEnAlmacen && tareasEnAlmacen.split('\n') || [];
    $scope.$watch('tareas', function() {
        localStorageService.add('tareas', $scope.tareas.join('\n'));
    }, true);
    $scope.addTarea = function() {
    	$scope.tareas.push($scope.tarea);
    	$scope.tarea = '';
    };
    $scope.eliminarTarea = function(index){
    	$scope.tareas.splice(index, 1);
    };
  });
