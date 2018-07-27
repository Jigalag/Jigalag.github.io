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
        function getAbout(){
            let defer = $q.defer();

            $http.get('app/modules/about/service/aboutData.json').then(
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
            getAbout: getAbout
        }
    }
})();