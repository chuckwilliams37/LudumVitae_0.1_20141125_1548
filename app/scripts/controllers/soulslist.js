'use strict';

angular.module('ludumVitaeApp')
  .controller('SoulsListCtrl', function ($scope, $modal, soul) {
    console.log ("SoulsListCtrl");
    $scope.soulService = soul;
    $scope.selectedSoul = null;
    
    $scope.init = function () {
      $scope.refreshSouls();
    };
    
    $scope.refreshSouls = function () {
      $scope.souls = soul.getAll().then(function(souls){
        console.log("souls gotten", souls.length);
        $scope.souls = souls;
      });
      $scope.selectedSoul = null;
    };
    
    $scope.editSoul = function ( selectedSoul ) {
      $scope.selectedSoul = selectedSoul;
      var modalInstance = $scope.getSoulModal();
      
      modalInstance.result.then (function (selectedSoul) {
        $scope.soulService.update ( selectedSoul ).then(function (response){
          console.log("update complete" , response);
          $scope.refreshSouls();
        });
        console.log ('updaing', selectedSoul );
      }); 
    }
    
    $scope.getSoulModal = function ( ) {
      var modalInstance = $modal.open({
        templateUrl : 'partials/souls/new_soul',
        controller : 'NewSoulCtrl',
        resolve : {
          selectedSoul : function () {
            return $scope.selectedSoul;
          }
        }
      });
      return modalInstance;
    }
    
    $scope.newSoul = function () {
     
      var modalInstance = $scope.getSoulModal();
      
      modalInstance.result.then (function (newSoul) {
        $scope.soulService.createNew ( newSoul ).then(function (response){
          console.log("save complete" , response);
          $scope.refreshSouls();
        });
        console.log ('saving', newSoul );
      });
    };
    
    $scope.removeSoul = function ( selectedSoul ) {
      $scope.soulService.remove( selectedSoul ).then( function (){
        $scope.refreshSouls();
      });
    }
    
  });
