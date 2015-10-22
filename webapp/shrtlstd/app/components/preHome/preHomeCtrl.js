(function(){
	'use strict';

	angular.module('preHomeModule', []).controller('preHomeCtrl', preHomeCtrl);

	/** @ngInject **/
	function preHomeCtrl($window , $state){
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
	}
})();