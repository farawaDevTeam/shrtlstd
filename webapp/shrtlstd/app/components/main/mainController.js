angular.module('mainModule', [])
	.controller('mainController', function(langService, $scope){
		'use strict';
		
		var self = this;
		
		self.showConnexionHeader = true;

		langService.getLabels(function (labels) {
			self.labels = labels;
		});
		
		
		//EVENTS
		$scope.$on('shComponent', function(e, data){
			self['show' + data.name] = data.sh;
		});
		
		$scope.$on('userConnexion', function(e, data){
			self.connectedUser = data;
		});
		
		$scope.$on('disconnexion', function(){
			self.connectedUser = null;
		});
	});