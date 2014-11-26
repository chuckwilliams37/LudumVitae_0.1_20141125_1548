'use strict';

describe('Service: gem', function () {

  // load the service's module
  beforeEach(module('ludumVitaeApp'));

  // instantiate service
  var gem;
  beforeEach(inject(function (_gem_) {
    gem = _gem_;
  }));

  it('should do something', function () {
    expect(!!gem).toBe(true);
  });

});
