angular.module('scrollModule', [])
    .directive('scroll', function ($window) {
        'use strict';

        return function(scope) {
            angular.element($window).bind('scroll', function() {
                 if (this.pageYOffset >= 100) {
                    scope.boolChangeClass = true;
                    console.log('Scrolled below header.');
                 } else {
                    scope.boolChangeClass = false;
                    console.log('Header is in view.');
                 }
                scope.$apply();
            });
    };
});