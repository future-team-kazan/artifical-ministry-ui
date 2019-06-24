/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.map', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('map', {
          url: '/map',
          templateUrl: 'app/pages/map/map.html',
          title: 'Карта',
          controller: 'MapPageCtrl',
          sidebarMeta: {
            icon: 'ion-ios-location-outline',
            order: 60,
          },
        });
  }

})();
