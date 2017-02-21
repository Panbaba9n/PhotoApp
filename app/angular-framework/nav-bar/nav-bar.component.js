(function() {
  'use strict';

  angular.module('navBar')
  .component('navBar', {
    templateUrl: 'angular-framework/nav-bar/nav-bar.template.html',
    controller: ['$location', '$scope', '$rootScope', NavBarController]
  });

  function NavBarController($location, $scope, $rootScope) {
    var self = this;
    self.currentNavItem = $location.path();
    self.location = $location;
    $scope.$on('$routeChangeSuccess', function() {self.currentNavItem = self.location.path()});
  };

})();