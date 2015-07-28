'use strict';

/**
 * @ngdoc overview
 * @name wtFeApp
 * @description
 * # wtFeApp
 *
 * Main module of the application.
 */
angular
  .module('wtFeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'config',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/goal', {
        templateUrl: 'views/goal.html',
        controller: 'GoalCtrl',
        controllerAs: 'goal'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl',
        controllerAs: 'history'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
