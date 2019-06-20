(function () {
  'use strict';

  angular.module('BlurAdmin.pages.documents', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('documents', {
          url: '/documents',
          templateUrl: 'app/pages/documents/documents.html',
          title: 'Документы',
          sidebarMeta: {
            icon: 'ion-android-attach',
            order: 20,
          },
        });
  }

})();
