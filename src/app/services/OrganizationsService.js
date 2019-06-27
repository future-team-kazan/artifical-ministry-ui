(function () {
  'use strict';

  var OrganizationsService = function OrganizationsService($http, ServiceConfig) {
    var defaultData = [
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
      },
      {
        id: 3,
        name: 'Гимназия №20',
        address: 'ул. Ленинского комсомола, 20А, Ульяновск, Ульяновская обл',
        employeesCount: 51,
        studentsCount: 648,
        salaryAverage: 19000,
        egeMathAverage: 46,
        egeRusAverage: 51,
        budgetYear: 15000000
      }
    ];
    this.getOrganizations = function () {
      return defaultData;
    };

    this.getOrganizationsFromServer = function getOrganizationsFromServer(callbackFunc) {
      console.log(ServiceConfig.serverUrl);
      $http.get(ServiceConfig.serverUrl + 'schools.php')
        .then(function successCallback(response) {
          console.log(response);
          //var res = mapOrganizationsFromServerToFrontData(response.data);
          return callbackFunc(mapOrganizationsFromServerToFrontData(response.data));
        }, function errorCallback(response) {
          console.log(response);
          console.log(response.status)
        });
    };

    var mapOrganizationsFromServerToFrontData = function mapOrganizationsFromServerToFrontData(organizations) {
      var resultArray = organizations.map(function (o) {
        var item = {
          id: o.id,
          name: o['school_data'].name,
          salaryAverage: o['school_data'].value
        };

        var randomData = defaultData[item.id % defaultData.length];
        item.address = randomData.address;
        item.employeesCount = randomData.employeesCount;
        item.studentsCount = randomData.studentsCount;
        item.egeMathAverage = randomData.egeMathAverage;
        item.egeRusAverage = randomData.egeRusAverage;
        item.budgetYear = randomData.budgetYear;
        return item;
      });
      console.log(resultArray);
      return resultArray;
    }
  };

  angular.module('ServicesModule')
    .service('OrganizationsService', OrganizationsService);

})();
