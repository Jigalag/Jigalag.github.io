(function () {
    'use strict';

    angular.module('app')
        .controller('aboutController', aboutController);

    aboutController.$inject = [
        '$scope',
        'userData',
        '$stateParams',
        '$timeout'
    ];

    function aboutController(
        $scope,
        userData,
        $stateParams,
        $timeout
    ) {

        $scope.aboutInfo = userData;
    }
})();