(function () {
    'use strict';

angular.module('contactModule')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function(
            $stateProvider,
            $urlRouterProvider
        ){

    $stateProvider
        .state('Contacts', {
            url: '/contacts',
            parent: 'restricted',
            views : {
                'content' : {
                    templateUrl: 'app/modules/contacts/views/index.html',
                    controller: 'contactsController'
                }
            }
        })
}]);

})();
