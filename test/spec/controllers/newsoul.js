'use strict';

describe('Controller: NewsoulCtrl', function () {

  // load the controller's module
  beforeEach(module('ludumVitaeApp'));

  var NewsoulCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsoulCtrl = $controller('NewsoulCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
