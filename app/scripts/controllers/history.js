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

    $scope.page = {current: 1};
    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;

    $scope.tracks = [];
    $scope.loadingIsDone = false;

    loadTracks();
    $scope.loadingIsDone = true;

    $scope.pageChanged = function() {
      //console.log('Page changed to: ' + $scope.page.current);
      loadTracks();
    };

    function loadTracks() {
      trackFactory.getTracksFor($scope.page.current)
        .then(function (history) {
          $scope.totalItems = history.pagination.total;
          angular.copy(history.tracks, $scope.tracks);
        });
    };
  });
