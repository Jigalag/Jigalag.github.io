(function () {
    'use strict';

    angular.module('aboutModule')
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