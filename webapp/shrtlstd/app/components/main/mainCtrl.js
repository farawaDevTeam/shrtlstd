angular.module('mainModule', [])
	.controller('mainCtrl', function (langService, $scope) {
		'use strict';

		var self = this;

		self.showConnexionHeader = true;
		
		// self.connectedUser = {pseudo: 'Toto'};

		langService.getLabels(function (labels) {
			self.labels = labels;
		});

		self.disconnect = function () {
			
			//on disconnection success
			self.connectedUser = null;
		};
		
		
		//EVENTS
		$scope.$on('shComponent', function (e, data) {
			self['show' + data.name] = data.sh;
		});

		$scope.$on('userConnexion', function (e, connectedUser) {
			self.connectedUser = connectedUser;
		});

		$scope.$on('disconnexion', function () {
			self.connectedUser = null;
		});
	});