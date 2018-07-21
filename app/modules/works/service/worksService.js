(function () {
    'use strict';

    angular.module('app')
        .service('worksServices', worksServices);

    worksServices.$inject = [
        '$http',
        '$q'
    ];

    function worksServices(
        $http,
        $q
    ) {
        function getWorks(){
            let defer = $q.defer();

            $http.get('app/modules/works/service/worksData.json').then(
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
            getWorks: getWorks
        }
    }
})();