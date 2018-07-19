(function () {
    'use strict';

    angular.module('app')
        .controller('projectsController', projectsController);

    projectsController.$inject = [
        '$scope',
        '$stateParams',
        '$timeout'
    ];

    function projectsController(
        $scope,
        $stateParams,
        $timeout
    ) {

    }
})();