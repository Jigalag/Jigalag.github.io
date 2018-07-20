(function () {
    'use strict';

    angular.module('app')
        .controller('projectController', projectController);

    projectController.$inject = [
        '$scope',
        '$stateParams',
        '$timeout'
    ];

    function projectController(
        $scope,
        $stateParams,
        $timeout
    ) {

    }
})();