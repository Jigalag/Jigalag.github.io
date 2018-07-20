(function () {
    'use strict';

    angular.module('app')
        .controller('projectsController', projectsController);

    projectsController.$inject = [
        '$scope',
        'projectsServices',
        '$stateParams',
        '$timeout'
    ];

    function projectsController(
        $scope,
        projectsServices,
        $stateParams,
        $timeout
    ) {
        projectsServices.getProjects().then((result) => {
            $scope.projects = result;
        });
    }
})();