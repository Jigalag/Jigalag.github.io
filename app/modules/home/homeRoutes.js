(function () {
    'use strict';

angular.module('homeModule')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('Home', {
            url: '/',
            parent: 'restricted',
            views : {
                'content' : {
                    templateUrl: './app/modules/home/views/index.html',
                    controller: 'homeController'
                }
            }
        })
}]);

})();