(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

  /** @ngInject */
  function DashboardCtrl($scope, baConfig, $element, layoutPaths) {
    $scope.projects = [
      {
        name: 'Современная школа',
        timeFrame: '1 октября 2018 - 31 декабря 2024',
        curator: 'Т.А.Голикова',
        director: 'М.Н.Ракова',
        administrator: 'А.В.Хамардюк',
        gosProgramm: '"Развитие образования"'
      },
      {
        name: 'Успех каждого ребенка',
        timeFrame: '1 октября 2018 - 31 декабря 2024',
        curator: 'Т.А.Голикова',
        director: 'М.Н.Ракова',
        administrator: 'Е.М.Зак',
        gosProgramm: '"Развитие образования"'
      },
      {
        name: 'Поддержка семей, имеющих детей',
        timeFrame: '1 октября 2018 - 31 декабря 2024',
        curator: 'Т.А.Голикова',
        director: 'М.Н.Ракова',
        administrator: 'А.В.Хамардюк',
        gosProgramm: '"Развитие образования"'
      },
      {
        name: 'Цифровая образовательная среда',
        timeFrame: '1 октября 2018 - 31 декабря 2024',
        curator: 'Т.А.Голикова',
        director: 'М.Н.Ракова',
        administrator: 'А.В.Хамардюк',
        gosProgramm: '"Развитие образования"'
      },
      {
        name: 'Учитель будущего',
        timeFrame: '1 октября 2018 - 31 декабря 2024',
        curator: 'Т.А.Голикова',
        director: 'М.Н.Ракова',
        administrator: 'А.В.Хамардюк',
        gosProgramm: '"Развитие образования"'
      },
      {
        name: 'Молодые профессионалы',
        timeFrame: '1 октября 2018 - 31 декабря 2024',
        curator: 'Т.А.Голикова',
        director: 'М.Н.Ракова, М.А.Боровская',
        administrator: 'И.А.Черноскутова, А.И.Рожков',
        gosProgramm: '"Развитие образования", "Научно-технологическое развитие Российской Федерации", "Содействие занятости населения"'
      }
    ];
    $scope.edictList = [
      {
        id: 1,
        name: 'Указ о цифровизации образовательного процесса',
        executionDate: "01.01.2020",
        person: 'Михайлов Иван Владимирович',
        percent: 68
      },
      {
        id: 2,
        name: 'Указ о повышении заработной платы преподавательского состава',
        executionDate: "01.07.2020",
        person: 'Голубева Ольга Федоровна',
        percent: 25
      },
      {
        id: 3,
        name: 'Указ о цифровизации образовательного процесса',
        executionDate: "01.12.2019",
        person: 'Алексеев Михаил Васильевич',
        percent: 40
      },
    ];
  }

})();
