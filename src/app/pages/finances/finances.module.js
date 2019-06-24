(function () {
  'use strict';

  angular.module('BlurAdmin.pages.finances', ['BlurAdmin.pages.charts.morris'])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('budgets', {
        url: '/finances',
        templateUrl: 'app/pages/finances/finances.html',
        title: 'Бюджет',
        controller: 'FinanceCtrl',
        sidebarMeta: {
          icon: 'ion-ios-calculator',
          order: 90,
        },
      })
      .state('budget', { // Не отображается в меню
        url: '/budget/:schoolId',
        templateUrl: 'app/pages/finances/budget.html',
        title: 'Бюджет учреждения',
        controller: 'BudgetCtrl',
      });
  }

})();