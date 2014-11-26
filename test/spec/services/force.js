'use strict';

describe('Service: force', function () {

  // load the service's module
  beforeEach(module('ludumVitaeApp'));

  // instantiate service
  var force;
  beforeEach(inject(function (_force_) {
    force = _force_;
  }));

  it('should do something', function () {
    expect(!!force).toBe(true);
  });

});
