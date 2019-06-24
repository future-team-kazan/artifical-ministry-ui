(function () {
  'use strict';

  angular.module('BlurAdmin.pages.edicts')
    .controller('EdictListCtrl', EdictListCtrl);

  /** @ngInject */
  function EdictListCtrl($scope) {
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
