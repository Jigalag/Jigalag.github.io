(function () {
    'use strict';

    angular.module('aboutModule')
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