(function () {
    'use strict';

    angular.module('app')
        .service('projectsServices', projectsServices);

    projectsServices.$inject = [
        '$http',
        '$q'
    ];

    function projectsServices(
        $http,
        $q
    ) {
        function getProjects(){
            let defer = $q.defer();

            $http.get('app/modules/projects/service/projects.json').then(
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
            getProjects: getProjects
        }
    }
})();