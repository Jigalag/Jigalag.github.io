(function () {
    'use strict';

    angular.module('contactModule')
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
    }
})();