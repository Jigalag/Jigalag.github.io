(function () {
    'use strict';

    angular.module('homeModule')
        .service('homeServices', homeServices);

    homeServices.$inject = ['$http', '$q', '$rootScope', 'config'];

    function homeServices($http, $q, $rootScope, config) {

    }
})();