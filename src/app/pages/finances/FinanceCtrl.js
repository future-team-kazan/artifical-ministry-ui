(function () {
  'use strict';

  angular.module('BlurAdmin.pages.finances')
    .controller('FinanceCtrl', FinanceCtrl);

  /** @ngInject */
  function FinanceCtrl($scope) {

    $scope.organizations = [
      {
        id: 1,
        name: 'Школа № 22',
        income: 10500000,
        expenses: 11000000,
        budget: 10000000
      },
      {
        id: 2,
        name: 'Школа № 22',
        income: 10500000,
        expenses: 11000000,
        budget: 10000000
      },
      {
        id: 3,
        name: 'Школа № 22',
        income: 10500000,
        expenses: 11000000,
        budget: 10000000
      },
      {
        id: 4,
        name: 'Школа № 22',
        income: 10500000,
        expenses: 11000000,
        budget: 10000000
      }
    ];

    $scope.ministryBudget = [
      {
        code: '416 00 00',
        name: 'Подпрограмма ”Дети-инвалиды“',
        expenses: 0
      },
      {
        code: '417 00 00',
        name: 'Подпрограмма ”Профилактика безнадзорности и правонарушенийнесовершеннолетних“',
        expenses: 0
      },
      {
        code: '418 00 00',
        name: 'Подпрограмма ”Одаренные дети“',
        expenses: 0
      },
      {
        code: '419 00 00',
        name: 'Подпрограмма ”Дети-сироты“',
        expenses: 45000000
      },
      {
        code: '420 00 00',
        name: 'Подпрограмма ”Здоровый ребенок“',
        expenses: 4000000
      },
      {
        code: '421 00 00',
        name: 'Детские дошкольные учреждения',
        expenses: 10045458
      },
      {
        code: '422 00 00',
        name: 'Школы-детские сады, школы начальные, неполные средние и средние',
        expenses: 10045458
      },
      {
        code: '423 00 00',
        name: 'Школы-интернаты',
        expenses: 10045458
      },
      {
        code: '424 00 00',
        name: 'Учреждения по внешкольной работе с детьми',
        expenses: 10045458
      },
      {
        code: '425 00 00',
        name: 'Детские дома',
        expenses: 10045458
      },
      {
        code: '426 00 00',
        name: 'Профессионально-технические училища',
        expenses: 10045458
      },
      {
        code: '427 00 00',
        name: 'Специальные профессионально-технические училища',
        expenses: 10045458
      },
      {
        code: '428 00 00',
        name: 'Средние специальные учебные заведения',
        expenses: 10045458
      },
      {
        code: '429 00 00',
        name: 'Институты повышения квалификации',
        expenses: 10045458
      },
      {
        code: '429 00 00',
        name: 'Учебные заведения и курсы по переподготовке кадров',
        expenses: 18093000
      },
      {
        code: '430 00 00',
        name: 'Высшие учебные заведения',
        expenses: 18093000
      },
      {
        code: '431 00 00',
        name: 'Организационно-воспитательная работа с молодежью',
        expenses: 18093000
      },
      {
        code: '432 00 00',
        name: 'Мероприятия по проведению оздоровительной кампании детей',
        expenses: 18093000
      },
      {
        code: '433 00 00',
        name: 'Специальные (коррекционные) учреждения',
        expenses: 18093000
      },
      {
        code: '435 00 00',
        name: 'Учреждения, обеспечивающие предоставление услуг в сфере образования',
        expenses: 18093000
      },
      {
        code: '436 00 00',
        name: 'Мероприятия в области образования\n',
        expenses: 18093000
      }
    ];
  }

})();
