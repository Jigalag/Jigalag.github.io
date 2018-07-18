(function () {
    'use strict';

angular.module('homeModule')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('restricted.home', {
            url: '/',
            views : {
                'content' : {
                    templateUrl: './app/modules/home/views/index.html',
                    controller: 'homeController'
                }
            }
        })
}]);

})();