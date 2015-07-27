'use strict';

/**
 * @ngdoc service
 * @name wtFeApp.trackFactory
 * @description
 * # trackFactory
 * Factory in the wtFeApp.
 */
angular.module('wtFeApp')
  .factory('trackFactory', function ($q, trackService) {
    // Service logic
    // ...

    // Public API here
    return {
      getTracksFor : function (page) {
        var deferred = $q.defer();
        trackService.getTracksFor(page).success(function (data) {
          var history = data;
          deferred.resolve(history);
        }).error(function (err) {
          deferred.reject(err);
        });
        return deferred.promise;
      },
    };
  });
