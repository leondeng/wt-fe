'use strict';

/**
 * @ngdoc service
 * @name wtFeApp.trackService
 * @description
 * # trackService
 * Service in the wtFeApp.
 */
angular.module('wtFeApp')
  .service('trackService', function ($http, SERVICE_ROOT) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getTracksFor = function (page) {
      return $http({
        url: SERVICE_ROOT + 'user/1/tracks/' + page,
        method: 'GET'
      });
    };
  });
