(function () {
    'use strict';

    angular.module('projectsModule')
        .controller('projectController', projectController);

    projectController.$inject = [
        '$scope',
        '$stateParams',
        'projectsServices',
        '$timeout'
    ];

    function projectController(
        $scope,
        $stateParams,
        projectsServices,
        $timeout
    ) {
        $scope.currentPorjectId = $stateParams.id;
        projectsServices.getProject($scope.currentPorjectId).then((result) => {
            $scope.project = result;
        });
    }
})();