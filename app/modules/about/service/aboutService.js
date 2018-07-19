(function () {
    'use strict';

    angular.module('app')
        .service('aboutServices', aboutServices);

    aboutServices.$inject = [
        '$http',
        '$q'
    ];

    function aboutServices(
        $http,
        $q
    ) {

    }
})();