(function () {
  'use strict';

  angular.module('BlurAdmin.pages.finances', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('finances', {
        url: '/finances',
        templateUrl: 'app/pages/finances/finances.html',
        title: 'Финансы',
        sidebarMeta: {
          icon: 'ion-android-attach',
          order: 60,
        },
      });
  }

})();