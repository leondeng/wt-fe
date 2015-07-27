'use strict';

/**
 * @ngdoc directive
 * @name wtFeApp.directive:pagination
 * @description
 * # pagination
 */
angular.module('wtFeApp')
  .directive('pagination', function () {
    return {
      templateUrl: 'scripts/partials/directives/pagination.html',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        var curPage = scope.pagination.current;
        var totalPages = scope.pagination.count;
        
        scope.paginationCells = [];
        scope.paginationCells.push({'page': '\u2039', 'cellClass': (curPage == 1) ? 'disabled' : ''});
        for (var i=1; i<=totalPages; i++) {
          var cell = {'page': i}
          if (curPage == i) {
            cell.cellClass = 'active';
          }
          scope.paginationCells.push(cell);
        }
        scope.paginationCells.push({'page': '\u203A', 'cellClass': (curPage == totalPages) ? 'disabled' : ''});
      }
    };
  });
