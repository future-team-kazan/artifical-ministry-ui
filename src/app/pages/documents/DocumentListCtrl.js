(function () {
  'use strict';

  angular.module('BlurAdmin.pages.documents')
    .controller('DocumentListCtrl', DocumentListCtrl);

  /** @ngInject */
  function DocumentListCtrl($scope) {
    $scope.documents = [
      {
        name: 'Документ 1',
        status: 'На рассмотрении',
        statusColor: 'info'
      },
      {
        name: 'Документ 2',
        status: 'На рассмотрении',
        statusColor: 'primary'
      }
    ];
  }

})();
