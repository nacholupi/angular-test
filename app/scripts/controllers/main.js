'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tareas = ['Item1', 'Item2', 'Item3'];
    $scope.addTarea = function() {
    	$scope.tareas.push($scope.tarea);
    	$scope.tarea = '';
    };
    $scope.eliminarTarea = function(index){
    	$scope.tareas.splice(index, 1);
    };
  });
