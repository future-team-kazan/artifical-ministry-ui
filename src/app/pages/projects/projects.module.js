(function () {
  'use strict';

  angular.module('BlurAdmin.pages.projects', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('projects', {
          url: '/projects',
          templateUrl: 'app/pages/projects/projects.html',
          title: 'Проекты',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 30,
          },
        });
  }

})();
