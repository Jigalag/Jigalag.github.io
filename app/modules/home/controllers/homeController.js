(function () {
    'use strict';

    angular.module('app')
        .controller('homeController', homeController);

    homeController.$inject = [
        '$scope',
        '$stateParams',
        '$timeout',
        'projectsServices',
        'homeServices'
    ];

    function homeController(
        $scope,
        $stateParams,
        $timeout,
        projectsServices,
        homeServices
    ) {
        homeServices.getData().then((result) => {
            $scope.homeData = result;
        });

        projectsServices.getProjects().then((result) => {
            $scope.projects = result;
        });
    }
})();