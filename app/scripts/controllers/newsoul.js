'use strict';

angular.module('ludumVitaeApp')
  .controller('NewSoulCtrl',function ( $scope, $modalInstance, selectedSoul ) {
    console.log ("NewSoulCtrl");
    $scope.newSoul = {
      name : "New Soul",
      email : "soul@ether.net",
      phone : "999.999.9999"
    };
    
    if ( selectedSoul ) {
      $scope.newSoul = selectedSoul;
    };
    
  });
