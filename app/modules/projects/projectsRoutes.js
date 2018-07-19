(function () {
    'use strict';

angular.module('app')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function(
            $stateProvider,
            $urlRouterProvider
        ){

    $stateProvider
        .state('Projects', {
            url: '/projects',
            parent: 'restricted',
            views : {
                'content' : {
                    templateUrl: 'app/modules/projects/views/index.html',
                    controller: 'projectsController'
                }
            }
        })
}]);

})();
