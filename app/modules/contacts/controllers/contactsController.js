(function () {
    'use strict';

    angular.module('app')
        .controller('contactsController', contactsController);

    contactsController.$inject = [
        '$scope',
        'contactsServices',
        '$stateParams',
        '$timeout'
    ];

    function contactsController(
        $scope,
        contactsServices,
        $stateParams,
        $timeout
    ) {

        contactsServices.getContacts().then((data) => {
            $scope.contactData = data;
        });
        $scope.geopos = {lat:46.469391,lng:30.740883};

        $scope.$on('mapInitialized', function(evt, evtMap) {
            $scope.map = evtMap;
            $scope.marker = new google.maps.Marker({position: evt.latLng, map: $scope.map});
        });
    }
})();