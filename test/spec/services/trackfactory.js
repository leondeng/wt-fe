'use strict';

describe('Service: trackFactory', function () {

  // load the service's module
  beforeEach(module('wtFeApp'));

  // instantiate service
  var trackFactory;
  beforeEach(inject(function (_trackFactory_) {
    trackFactory = _trackFactory_;
  }));

  it('should do something', function () {
    expect(!!trackFactory).toBe(true);
  });

});
