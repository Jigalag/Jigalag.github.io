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
            abstract: true,
            parent: 'restricted',
            views : {
                'content' : {
                    template: '<div data-ui-view="inner-template"></div>',
                }
            }
        })
        .state('ProjectsList', {
            url: '/projects',
            parent: 'Projects',
            views : {
                'inner-template' : {
                    templateUrl: 'app/modules/projects/views/index.html',
                    controller: 'projectsController'
                }
            }
        })
        .state('Project', {
            url: '/:id',
            parent: 'Projects',
            views : {
                'inner-template' : {
                    templateUrl: 'app/modules/projects/views/single.html',
                    controller: 'projectController'
                }
            }
        })
}]);

})();
