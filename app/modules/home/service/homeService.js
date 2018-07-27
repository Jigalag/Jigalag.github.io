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

        function getData(){
            let defer = $q.defer();

            $http.get('app/modules/home/service/homeData.json').then(
                function (response) {
                    defer.resolve(response.data);
                },
                function errorCallback(response) {
                    defer.reject(response);
                }
            );

            return defer.promise;
        }
        return {
            getData: getData
        }
    }
})();