(function () {
    'use strict';

    angular.module('app')
        .controller('restrictedController', restrictedController);

    restrictedController.$inject = [
        '$scope',
        'userData',
        '$state'
    ];

    function restrictedController(
        $scope,
        userData,
        $state
    ) {
        $scope.userData = userData;
        $scope.openNav = () => {
            angular.element('.headerNavigation').toggleClass('active');
            angular.element('.navBurger').toggleClass('active');
        }
    }
})();