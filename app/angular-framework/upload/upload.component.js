(function() {
  'use strict';

  angular.module('upload')
  .component('upload', {
    templateUrl: 'angular-framework/upload/upload.template.html',
    controller: [uploadImageController]
  });

  function uploadImageController() {
    var self = this;
    this.ololo = "it's alive";

  };

})();