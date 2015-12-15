angular.module('signUpModule', [])
	.controller('signUpCtrl', function(langService){
		'use strict';
		
		var self = this;

		langService.getLabels(function (labels) {
			self.labels = labels;
		});
		
		self.signUp = function(){
			console.log('signing up...');
			console.log(self.newUser);
			console.log(self.signUpForm);
		};

	});