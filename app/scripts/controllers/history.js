'use strict';

/**
 * @ngdoc function
 * @name wtFeApp.controller:HistoryCtrl
 * @description
 * # HistoryCtrl
 * Controller of the wtFeApp
 */
angular.module('wtFeApp')
  .controller('HistoryCtrl', function ($scope, trackFactory) {
    var page = 1;
    trackFactory.getTracksFor(page)
    .then(function (history){
      $scope.tracks = history.tracks;
      $scope.pagination = history.pagination;
    });
  });
