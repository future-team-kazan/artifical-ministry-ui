(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mainPage')
    .controller('MainPageCtrl', MainPageCtrl);

  /** @ngInject */
  function MainPageCtrl($scope, baConfig, $element, layoutPaths) {

    $scope.notifictions = [
      {
        "id": 10,
        "type": "drug",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 11,
        "type": "sport",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 12,
        "type": "drug",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      }
    ];
  }

})();
