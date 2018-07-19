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
        /**
         * Remove html5mode because github pages not working correct with this
         */
        // $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('restricted', {
                abstract: true,
                views: {
                    '@': {
                        templateUrl: 'app/views/main.html',
                        controller: 'restrictedController'
                    }
                }
            })

    }]);
