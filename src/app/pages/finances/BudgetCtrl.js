(function () {
  'use strict';

  angular.module('BlurAdmin.pages.finances')
    .controller('BudgetCtrl', BudgetCtrl);

  /** @ngInject */
  function BudgetCtrl($scope) {
    $scope.incomes = [
      {
        name: 'Субсидии',
        value: 100000
      },
      {
        name: 'Гранты',
        value: 100000
      },
      {
        name: 'Спонсорская помощь',
        value: 100000
      },
      {
        name: 'Инвестиции',
        value: 100000
      },
      {
        name: 'Кредиты',
        value: 100000
      }
    ];

    $scope.expenses = [
      {
        name: 'Оплата труда и начисления на оплату труда',
        value: 100000
      },
      {
        name: 'Приобретение услуг',
        value: 100000
      },
      {
        name: 'Обслуживание долговых обязательств',
        value: 100000
      },
      {
        name: 'Безвозмездные и безвозвратные перечисления организациям',
        value: 100000
      },
      {
        name: 'Безвозмездные и безвозвратные перечисления бюджетам',
        value: 100000
      },
      {
        name: 'Прочие расходы',
        value: 100000
      },
    ];

  }

})();
