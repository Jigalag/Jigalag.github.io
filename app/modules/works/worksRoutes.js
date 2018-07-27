(function () {
    'use strict';

angular.module('worksModule')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function(
            $stateProvider,
            $urlRouterProvider
        ){

    $stateProvider
        .state('Works', {
            url: '/works',
            parent: 'restricted',
            views : {
                'content' : {
                    templateUrl: 'app/modules/works/views/index.html',
                    controller: 'worksController'
                }
            }
        })
}]);

})();
