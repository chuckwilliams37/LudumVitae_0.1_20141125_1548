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
    RestangularProvider.setBaseUrl('https://api.mongolab.com/api/1/databases/ludumvitae_20141125/collections');
    RestangularProvider.setDefaultRequestParams({ apiKey: 'JS9E_uVFN0H-UCgAX-yFbhyzmyLSjsR5' })
  });
