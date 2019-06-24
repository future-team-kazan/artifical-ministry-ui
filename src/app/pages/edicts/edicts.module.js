/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.edicts', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('edicts', {
          url: '/edicts',
          templateUrl: 'app/pages/edicts/edicts.html',
          title: 'Указы',
          controller: 'EdictListCtrl',
          sidebarMeta: {
            icon: 'ion-android-done',
            order: 30,
          },
        });
  }

})();
