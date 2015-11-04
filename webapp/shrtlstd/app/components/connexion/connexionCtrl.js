angular.module('connexionModule', [])
	.controller('connexionCtrl', function(langService, connexionService, ngDialog){
		'use strict';
		
		var self = this;
		
		langService.getLabels(function(labels){
			self.labels = labels;
		});
		
		self.credentials = {
			login: 'root12334@gmail.com',
			password: 'Root1234$'
			// login: 'toto@g',
			// password: 'xx'
		};
		
		self.connect = function(){
			if(!self.connexionForm.$valid){
				return;
			}
			console.log('connecting...');
			
			self.connexionForm.mainError = null;
			
			connexionService.connect(self.credentials)
				.success(function(data){
					console.log('success', data);
					ngDialog.close();
				})
				.error(function(err){
					self.connexionForm.mainError = err.message;
				});
		};
	});