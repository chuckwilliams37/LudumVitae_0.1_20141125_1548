'use strict';

angular.module('ludumVitaeApp')
  .controller('SoulsListCtrl', function ($scope, $modal) {
    console.log ("SoulsListCtrl");
    $scope.souls = [];
    
    $scope.newSoul = function () {
      
      var modalInstance = $modal.open({
        templateUrl : 'partials/souls/new_soul',
        controller : 'NewSoulCtrl',
        resolve : {
          soul : function () {
            return $scope.newSoul;
          }
        }
      })
      
      modalInstance.result.then (function (newSoul) {
        console.log ('you just created', newSoul );
      })
      
    }
  });
