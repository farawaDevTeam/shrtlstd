
angular.module('preHomeModule', [])
	.controller('preHomeCtrl', function($window , $state){
			'use strict';

			var vm = this;

			vm.goHome = function(){
				$state.go('home');
			};

			//MAIN
			if($window.localStorage.hasAlreadyCome){
				vm.goHome();
				return;
			}
			$window.localStorage.hasAlreadyCome = true;
		});