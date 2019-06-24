(function () {
  'use strict';

  angular.module('BlurAdmin.pages.documents')
    .controller('DocumentListCtrl', DocumentListCtrl);

  /** @ngInject */
  function DocumentListCtrl($scope) {
    $scope.documents = [
      {
        type: 'Служебная записка',
        shortDesc: 'Служебная записка на предоставление оборудования',
        resolution: 'одобрено',
        person: 'Александров М. А.',
        deadline: '5.07.2019',
        status: 'На рассмотрении'
      },
      {
        type: 'Лист согласования',
        shortDesc: 'Лист согласования бюджета',
        resolution: 'не согласовано',
        person: 'Матвеева И. Г.',
        deadline: '3.07.2019',
        status: 'На рассмотрении'
      },
      {
        type: 'Распоряжение',
        shortDesc: 'Распоряжение о чрезвучайном просишествии ',
        resolution: 'подписано',
        person: 'Куропатов И. Ф.',
        deadline: '1.07.2019',
        status: 'На рассмотрении'
      }
    ];
  }

})();
