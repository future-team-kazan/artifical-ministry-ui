/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.schools', ['ServicesModule'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('schools', { // Отображается в меню
          url: '/schools',
          templateUrl: 'app/pages/schools/schools.html',
          title: 'Организации',
          controller: 'SchoolListCtrl',
          sidebarMeta: {
            icon: 'ion-android-contract',
            order: 70,
          },
        })
      .state('school', { // Не отображается в меню
        url: '/schools/:schoolId',
        templateUrl: 'app/pages/schools/school.html',
        title: 'Организации',
        controller: 'SchoolCtrl',
      })
    ;
  }

})();
