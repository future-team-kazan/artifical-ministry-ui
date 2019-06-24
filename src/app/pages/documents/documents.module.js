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
        controller: 'DocumentListCtrl',
        sidebarMeta: {
          icon: 'ion-android-attach',
          order: 20,
        }
      })
      // .state('document', {
      //   url: '/documents/:documentId',
      //   templateUrl: 'app/pages/documents/documents.html',
      //   title: 'Документы',
      //   controller: 'DocumentListCtrl'
      // })
    ;
  }

})();
