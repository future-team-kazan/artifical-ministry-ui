(function () {
  'use strict';

  var ServiceConfig = function ServiceConfig() {
    return {
      serverUrl: 'http://am-database/'
    }
  };

  angular.module('Services', [])
    .factory('ServiceConfig', ServiceConfig);

})();
