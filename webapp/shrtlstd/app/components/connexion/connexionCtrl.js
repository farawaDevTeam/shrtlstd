angular.module('connexionModule', [])
	.controller('connexionCtrl', function (langService, connexionService) {
		'use strict';

		connexionService.asyncFbInit();

		var self = this;

		langService.getLabels(function (labels) {
			self.labels = labels;
		});

		self.credentials = {
			login: 'root12334@gmail.com',
			password: 'Root1234$'
			// login: 'toto@g',
			// password: 'xx'
		};

		self.connect = function () {

			// var user = { pseudo: 'Toto', fbId: 'ccc' };
			// connexionService.setUser(user);
			// return;

			if (!self.connexionForm.$valid) {
				return;
			}
			console.log('connecting...');

			self.connexionForm.mainError = null;

			connexionService.connect(self.credentials)
				.success(function (data) {
					console.log('success', data);
					var user = { pseudo: 'Toto' };
					connexionService.setUser(user);
				})
				.error(function (err) {

					if (err) {
						self.connexionForm.mainError = err.message;
						return;
					}
					self.connexionForm.mainError = self.labels.forms.errors.unknown;
				});
		};
	});