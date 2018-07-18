'use strict';
const app = angular.module('app', [
    'ui.router',
    'ngResource',
    'ngAnimate',
    'restrictedModule'
]);

app.run([
    '$state',
    function(
        $state
    ) {
        $state.go('')
    }]);
