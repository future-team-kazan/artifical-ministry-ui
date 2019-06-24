(function () {
  'use strict';

  var OrganizationsService = function OrganizationsService($http, ServiceConfig) {
    this.getOrganizations = function () {
      return [
        {
          id: 1,
          name: 'Гимназия №44',
          address: 'ул. Оренбургская, 34А, Ульяновск, Ульяновская обл',
          employeesCount: 58,
          studentsCount: 1136,
          salaryAverage: 24000,
          egeMathAverage: 46,
          egeRusAverage: 58,
          budgetYear: 25000000
        },
        {
          id: 2,
          name: 'Гимназия №20',
          address: 'ул. Ленинского комсомола, 20А, Ульяновск, Ульяновская обл',
          employeesCount: 76,
          studentsCount: 1448,
          salaryAverage: 27000,
          egeMathAverage: 54,
          egeRusAverage: 52,
          budgetYear: 30000000
        }
      ];
    };

    this.getOrganizationsFromServer = function (callbackFunc) {
      console.log(ServiceConfig.serverUrl);
      $http.get(ServiceConfig.serverUrl + 'schools.php')
        .then(function successCallback(response) {
          console.log(response);
          return callbackFunc(response.data);
        }, function errorCallback(response) {
          console.log(response);
          console.log(response.status)
        });
    };
  };

  angular.module('OrganizationsModule', ['Services'])
    .service('OrganizationsService', OrganizationsService);

})();
