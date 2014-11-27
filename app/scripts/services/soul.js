'use strict';

angular.module('ludumVitaeApp')
  .factory('soul', function ( Restangular ) {
    // Service logic
    // ...
  console.log ('soul service');
    var souls = Restangular.all('souls');
    
    var getAll = souls.getList,
      create = function (newSoul) { 
        return souls.post(newSoul);
      },
      remove = function ( soulToRemove ){
        return soulToRemove.one(soulToRemove._id.$oid).remove();
      },
      update = function ( soul ) {
        return soul.one(soul._id.$oid).put();
      }
    ;
    // Public API here
    return {
      getAll: getAll,
      createNew : create,
      remove : remove,
      update : update
    };
  });
