'use strict';

angular.module('ludumVitaeApp')
  .controller('MainCtrl', ['$route','$routeParams','$location','$scope', function ($route, $routeParams, $location, $scope ) {
    $scope.souls = [];
    $scope.gems = [];
    $scope.force = 1000;
  }]);
