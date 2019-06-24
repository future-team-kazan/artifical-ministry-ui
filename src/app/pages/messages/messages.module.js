(function () {
  'use strict';

  angular.module('BlurAdmin.pages.messages', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('messages', {
          url: '/messages',
          templateUrl: 'app/pages/messages/messages.html',
          title: 'Сообщения',
          controller: 'MessageListCtrl',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 30,
          },
        });
  }

})();
