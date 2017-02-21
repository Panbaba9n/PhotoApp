(function() {
  'use strict';

  angular.module('mainApp')
  .config(['$locationProvider', '$routeProvider', mainAppConfig]);

  function mainAppConfig($locationProvider, $routeProvider) {

    $routeProvider
    .when('/albums-list', {
     template: '<albums-list></albums-list>'
   })
    .when('/albums-list/1', {
     template: '<album-detail></album-detail>'
   })
    .when('/albums-list/1/1', {
     template: '<album-image></album-image>'
   })
    .when('/upload', {
     template: '<upload></upload>'
   })
    .when('/login', {
     template: '<span>login</span>'
   })
    .otherwise('/albums-list');
  };
  
})();