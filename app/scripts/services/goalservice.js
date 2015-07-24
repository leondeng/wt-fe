'use strict';

/**
 * @ngdoc service
 * @name wtFeApp.goalService
 * @description
 * # goalService
 * Service in the wtFeApp.
 */
angular.module('wtFeApp')
  .service('goalService', function ($http, SERVICE_ROOT) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.setGoalFor = function (goal) {
      return $http({
        url: SERVICE_ROOT + 'user/1/goal',
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: {
          'goal': goal
        }
      });
    };
  });
