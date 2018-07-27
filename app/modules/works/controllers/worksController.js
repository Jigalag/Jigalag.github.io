(function () {
    'use strict';

    angular.module('worksModule')
        .controller('worksController', worksController);

    worksController.$inject = [
        '$scope',
        'worksServices',
        '$stateParams',
        '$timeout'
    ];

    function worksController(
        $scope,
        worksServices,
        $stateParams,
        $timeout
    ) {

        worksServices.getWorks().then((data) => {
            $scope.works = data;
        });
    }
})();