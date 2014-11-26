'use strict';

describe('Controller: SoulslistCtrl', function () {

  // load the controller's module
  beforeEach(module('ludumVitaeApp'));

  var SoulslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SoulslistCtrl = $controller('SoulslistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
