
angular.module('preHomeModule', [])
	.controller('preHomeCtrl', function ($window, $state, $timeout, $rootScope) {
		'use strict';

		var self = this;

		self.goHome = function () {
			$window.localStorage.hasAlreadyCome = true;
			self.boolSlideUp = true;
			$timeout(function () {
				$rootScope.$broadcast('shComponent', { name: 'ConnexionHeader', sh: true });
				$state.go('home');
			}, 500);
		};

		//MAIN
		$rootScope.$broadcast('shComponent', { name: 'ConnexionHeader', sh: false });

		if ($window.localStorage.hasAlreadyCome) {
			self.goHome();
			return;
		}
	});