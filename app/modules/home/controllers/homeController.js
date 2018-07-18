(function () {
    'use strict';

    angular.module('homeModule')
        .controller('homeController', homeController);

    homeController.$inject = [
        '$scope',
        '$stateParams',
        '$timeout'
    ];

    function homeController(
        $scope,
        $stateParams,
        $timeout
    ) {

    }
})();