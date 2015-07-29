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
    $scope.currentPage = 1;
    $scope.loadingIsDone = false;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      console.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.loadItemsForPage = function(pageNo) {
      trackFactory.getTracksFor(pageNo)
      .then(function (history) {
        $scope.tracks = history.tracks;
        $scope.totalItems = history.pagination.total;
        $scope.currentPage = history.pagination.current;
        $scope.loadingIsDone = true;
      });
    };

    $scope.loadItemsForPage($scope.currentPage);
  });
