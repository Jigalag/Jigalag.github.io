(function () {
    'use strict';

angular.module('aboutModule')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function(
            $stateProvider,
            $urlRouterProvider
        ){

    $stateProvider
        .state('About', {
            url: '/about',
            parent: 'restricted',
            views : {
                'content' : {
                    templateUrl: 'app/modules/about/views/index.html',
                    controller: 'aboutController'
                }
            }
        })
}]);

})();
