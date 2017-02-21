(function() {
  'use strict';

  angular.module('albumImage')
  .component('albumImage', {
    templateUrl: 'angular-framework/album-image/album-image.template.html',
    controller: [AlbumImageController]
  });

  function AlbumImageController() {
    var self = this;
    this.ololo = "it's alive";

  };

})();