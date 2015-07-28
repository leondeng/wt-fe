'use strict';

describe('Controller: GoalCtrl', function () {

  // load the controller's module
  beforeEach(module('wtFeApp'));

  var GoalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GoalCtrl = $controller('GoalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(GoalCtrl.awesomeThings.length).toBe(3);
  });*/
});
