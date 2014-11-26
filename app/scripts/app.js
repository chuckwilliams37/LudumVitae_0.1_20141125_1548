'use strict';

angular
  .module('ludumVitaeApp', [
    'restangular',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'partials/home/container',
        controller: 'MainCtrl'
      })
      .when('/souls',{
        templateUrl: 'partials/souls/list',
        controller: 'SoulsListCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
