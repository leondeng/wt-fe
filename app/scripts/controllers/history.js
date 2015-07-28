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

    trackFactory.getTracksFor()
    .then(function (history){
      $scope.tracks = history.tracks;
      $scope.totalItems = history.pagination.count;
      $scope.currentPage = 1;
      $scope.loadingIsDone = true;

      $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
      };

      $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
      };

      $scope.maxSize = 5;
      $scope.bigTotalItems = 175;
      $scope.bigCurrentPage = 1;
    });
  });
