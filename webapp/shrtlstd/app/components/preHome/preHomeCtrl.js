
angular.module('preHomeModule', [])
	.controller('preHomeCtrl', function ($window, $state, langService, $timeout) {
		'use strict';

		var self = this;

		langService.getLabels(function (labels) {
			self.labels = labels;
		});

		self.goHome = function () {
			$window.localStorage.hasAlreadyCome = true;
			self.boolSlideUp = true;
			$timeout(function() {$state.go('home');}, 1000);
			//setTimeout(function() {$state.go('home');}, 1000);
			$state.go('home');
		};

		//MAIN
		if ($window.localStorage.hasAlreadyCome) {
			self.goHome();
			return;
		}
	});