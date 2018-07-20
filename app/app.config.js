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
                },
                resolve: {
                    userData: ['aboutServices', function(aboutServices) {
                        return aboutServices.getAbout().then(function (response) {
                            return response;
                        }, function (error) {})
                    }]
                }
            });
    }])
    .run(['$rootScope', '$state', '$location',
    function ($rootScope, $state, $location) {

    $rootScope.$on('$stateChangeSuccess',
        function (event, data) {
            $rootScope.currentState = $state.current.name;
            angular.element('body, html').stop().animate({
                scrollTop: 0
            }, 500);
        });

}]);
