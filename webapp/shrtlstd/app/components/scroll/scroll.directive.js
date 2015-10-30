angular.module('scrollModule', [])
    .directive('scroll', function ($window) {
        'use strict';

        return function(scope) {
            angular.element($window).bind('scroll', function() {
                 if (this.pageYOffset >= 100) {
                    scope.boolChangeClass = true;
                 } else {
                    scope.boolChangeClass = false;
                 }
                scope.$apply();
            });
    };
});