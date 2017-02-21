(function() {
  'use strict';

  angular.module('albumsList')
  .component('albumsList', {
    templateUrl: 'angular-framework/albums-list/albums-list.template.html',
    controller: [AlbumsListController]
  });

  function AlbumsListController() {
    var self = this;

  };

})();