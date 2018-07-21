(function () {
    'use strict';

    angular.module('app')
        .controller('restrictedController', restrictedController);

    restrictedController.$inject = [
        '$scope',
        'userData',
        '$state'
    ];

    function restrictedController(
        $scope,
        userData,
        $state
    ) {
        $scope.userData = userData;
    }
})();