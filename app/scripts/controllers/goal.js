'use strict';

/**
 * @ngdoc function
 * @name wtFeApp.controller:GoalCtrl
 * @description
 * # GoalCtrl
 * Controller of the wtFeApp
 */
angular.module('wtFeApp')
  .controller('GoalCtrl', function ($scope, goalService) {
    $scope.setGoal = function () {
      goalService.setGoalFor($scope.goalVal);
    };
  });
