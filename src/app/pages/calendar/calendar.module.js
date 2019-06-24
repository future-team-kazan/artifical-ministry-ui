(function () {
  'use strict';

  angular.module('BlurAdmin.pages.calendar', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('calendar', {
          url: '/calendar',
          templateUrl: 'app/pages/calendar/calendar.html',
          title: 'Календарь',
          sidebarMeta: {
            icon: 'ion-ios-location-outline',
            order: 10,
          },
        });
  }

})();
