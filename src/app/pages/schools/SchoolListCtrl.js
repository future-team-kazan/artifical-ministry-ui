(function () {
  'use strict';

  angular.module('BlurAdmin.pages.schools')
    .controller('SchoolListCtrl', SchoolListCtrl);

  /** @ngInject */
  function SchoolListCtrl($scope, OrganizationsService) {
    OrganizationsService.getOrganizationsFromServer(function(dataResponse) {
      $scope.schools = dataResponse;
      console.log($scope.dataFromDb);
    });
  }

})();
