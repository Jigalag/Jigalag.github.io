(function () {
    angular.module('app')
        .directive('mobileNav', mobileNav);

    function mobileNav() {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/mobileNavigation/views/index.html',
            scope: {
                navigation: '@'
            },
            link: function ($scope, $element, $attrs) {
                $element.on('click', () => {
                    angular.element($scope.navigation).toggleClass('active');
                    $element.find('.navBurger').toggleClass('active');
                });
            }
        };
    }
})();
