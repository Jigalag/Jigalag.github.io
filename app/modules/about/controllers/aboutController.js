(function () {
    'use strict';

    angular.module('app')
        .controller('aboutController', aboutController);

    aboutController.$inject = [
        '$scope',
        '$stateParams',
        '$timeout'
    ];

    function aboutController(
        $scope,
        $stateParams,
        $timeout
    ) {

    }
})();