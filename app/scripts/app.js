'use strict';

/**
 * @ngdoc overview
 * @name todoListApp
 * @description
 * # todoListApp
 *
 * Main module of the application.
 */
angular
  .module('todoListApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
