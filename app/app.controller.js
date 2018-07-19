(function () {
    'use strict';

    angular.module('app')
        .controller('restrictedController', restrictedController);

    restrictedController.$inject = [
        '$scope',
        '$state'
    ];

    function restrictedController(
        $scope,
        $state
    ) {


    }
})();