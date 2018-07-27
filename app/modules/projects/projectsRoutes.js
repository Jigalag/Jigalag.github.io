(function () {
    'use strict';

angular.module('projectsModule')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function(
            $stateProvider,
            $urlRouterProvider
        ){

    $stateProvider
        .state('Projects', {
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
            url: '/project/:id',
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
