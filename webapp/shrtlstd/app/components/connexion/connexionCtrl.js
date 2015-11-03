angular.module('connexionModule', [])
	.controller('connexionCtrl', function(langService){
		'use strict';
		
		var self = this;
		
		langService.getLabels(function(labels){
			self.labels = labels;
		});
		
		self.credentials = {};
		
		self.connect = function(isFormValid){
			if(!isFormValid){
				return;
			}
			console.log('connecting...');
		};
	});