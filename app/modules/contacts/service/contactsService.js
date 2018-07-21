(function () {
    'use strict';

    angular.module('app')
        .service('contactsServices', contactsServices);

    contactsServices.$inject = [
        '$http',
        '$q'
    ];

    function contactsServices(
        $http,
        $q
    ) {
        function getContacts(){
            let defer = $q.defer();

            $http.get('app/modules/contacts/service/contactsData.json').then(
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
            getContacts: getContacts
        }
    }
})();