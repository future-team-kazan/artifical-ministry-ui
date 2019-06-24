/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.map')
      .controller('MapPageCtrl', MapPageCtrl);

  /** @ngInject */
  function MapPageCtrl($timeout) {
    function initialize() {
      L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet/dist/images';
      var map = L.map(document.getElementById('leaflet-map')).setView([54.312939, 48.397971], 15);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([54.31535, 48.388665]).addTo(map)
          .bindPopup('УлГТУ')
          .openPopup();
    }

    $timeout(function(){
      initialize();
    }, 100);

  }

})();
