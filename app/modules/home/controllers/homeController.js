(function () {
    'use strict';

    angular.module('app')
        .controller('homeController', homeController);

    homeController.$inject = [
        '$scope',
        '$stateParams',
        '$timeout',
        'projectsServices',
        'aboutServices',
        'homeServices'
    ];

    function homeController(
        $scope,
        $stateParams,
        $timeout,
        projectsServices,
        aboutServices,
        homeServices
    ) {
        homeServices.getData().then((result) => {
            $scope.homeData = result;
        });

        aboutServices.getAbout().then((result) => {
            $scope.aboutInfo = result;
        });

        projectsServices.getProjects().then((result) => {
            $scope.projects = result;
        });
    }
})();