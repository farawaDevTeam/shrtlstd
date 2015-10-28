
angular.module('preHomeModule', [])
	.controller('preHomeCtrl', function ($window, $state, langService) {
		'use strict';

		var self = this;

		langService.getLabels(function (labels) {
			self.labels = labels;
		});

		self.goHome = function () {
			$window.localStorage.hasAlreadyCome = true;
			$state.go('home');
		};

		//MAIN
		if ($window.localStorage.hasAlreadyCome) {
			self.goHome();
			return;
		}
	});