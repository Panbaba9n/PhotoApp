(function() {
  'use strict';

  angular.module('mainApp', [
    /* AngularJS */
    'ngResource',
    'ngRoute',
    'ngMaterial',

    /* External libs */
    'infinite-scroll',
    
    /* Customs */
    'navBar',
    'albumsList',
    'albumDetail',
    'albumImage',
    'upload'
    ]);
})();