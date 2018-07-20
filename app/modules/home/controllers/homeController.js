(function () {
    'use strict';

    angular.module('app')
        .controller('homeController', homeController);

    homeController.$inject = [
        '$scope',
        '$stateParams',
        '$timeout',
        'userData',
        'projectsServices',
        'homeServices'
    ];

    function homeController(
        $scope,
        $stateParams,
        $timeout,
        userData,
        projectsServices,
        homeServices
    ) {
        homeServices.getData().then((result) => {
            $scope.homeData = result;
        });

        $scope.aboutInfo = userData;

        projectsServices.getProjects().then((result) => {
            $scope.projects = result;
        });
    }
})();