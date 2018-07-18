app.config([
    '$httpProvider',
    '$compileProvider',
    '$locationProvider',
    '$interpolateProvider',
    '$urlRouterProvider',
    '$stateProvider',
    function (
        $httpProvider,
        $compileProvider,
        $locationProvider,
        $interpolateProvider,
        $urlRouterProvider,
        $stateProvider
    ) {
        $interpolateProvider.startSymbol('[[').endSymbol(']]');

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('restricted', {
                abstract: true,
                views: {
                    'layout': {
                        templateUrl: './app/views/main.html',
                        controller: 'restrictedController'
                    }
                }
            })

    }]);
