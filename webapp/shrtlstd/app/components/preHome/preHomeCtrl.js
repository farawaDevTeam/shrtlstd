
angular.module('preHomeModule', [])
	.controller('preHomeCtrl', function($window , $state){
			'use strict';

			var self = this;

			self.goHome = function(){
				$window.localStorage.hasAlreadyCome = true;
				$state.go('home');
			};

			//MAIN
			if($window.localStorage.hasAlreadyCome){
				self.goHome();
				return;
			}
		});