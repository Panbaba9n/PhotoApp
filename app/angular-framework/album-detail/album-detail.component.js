(function() {
  'use strict';

  angular.module('albumDetail')
  .component('albumDetail', {
    templateUrl: 'angular-framework/album-detail/album-detail.template.html',
    controller: [AlbumDetailController]
  });

  function AlbumDetailController() {
    var self = this;
    this.ololo = "it's alive";

  };

})();