(function () {
    'use strict';

    angular.module('homeModule')
        .service('homeServices', homeServices);

    homeServices.$inject = [
        '$http',
        '$q'
    ];

    function homeServices(
        $http,
        $q
    ) {

    }
})();