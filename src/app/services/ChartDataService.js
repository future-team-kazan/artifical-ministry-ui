(function () {
  'use strict';

  var ChartDataService = function ChartDataService($http, ServiceConfig) {

    this.getDataFromServer = function getDataFromServer(callbackFunc) {
      $http.get(ServiceConfig.serverUrl + 'positions_value_chart.php')
        .then(function successCallback(response) {
          console.log(response);
          return callbackFunc(response.data);
        }, function errorCallback(response) {
          console.log(response);
          console.log(response.status)
        });
    };
  };

  angular.module('ServicesModule')
    .service('ChartDataService', ChartDataService);

})();
