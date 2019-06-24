(function () {
  'use strict';

  angular.module('BlurAdmin.pages.notifications', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('notifications', {
          url: '/notifications',
          templateUrl: 'app/pages/messages/messages.html',
          title: 'Уедомления',
          controller: 'MessageListCtrl',
          sidebarMeta: {
            icon: 'ion-clipboard',
            order: 110,
          },
        });
  }

})();
