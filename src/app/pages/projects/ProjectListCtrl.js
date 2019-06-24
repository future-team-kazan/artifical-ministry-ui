(function () {
  'use strict';

  angular.module('BlurAdmin.pages.projects')
    .controller('ProjectListCtrl', ProjectListCtrl);

  /** @ngInject */
  function ProjectListCtrl($scope) {
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

  }

})();
