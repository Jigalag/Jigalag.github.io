(function () {
    'use strict';

    angular.module('restrictedModule', [])
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