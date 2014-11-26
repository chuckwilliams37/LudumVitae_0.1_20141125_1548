'use strict';

describe('Service: sphere', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var sphere;
  beforeEach(inject(function (_sphere_) {
    sphere = _sphere_;
  }));

  it('should do something', function () {
    expect(!!sphere).toBe(true);
  });

});
