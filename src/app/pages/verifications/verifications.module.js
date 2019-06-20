(function () {
  'use strict';

  angular.module('BlurAdmin.pages.verifications', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('verifications', {
          url: '/verifications',
          templateUrl: 'app/pages/verifications/verifications.html',
          title: 'Проверки',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 70,
          },
        });
  }

})();
