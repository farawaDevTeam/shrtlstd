angular.module('connexionModule', [])
	.controller('connexionCtrl', function (langService, userService) {
		'use strict';

		userService.asyncFbInit();

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
			// userService.setUser(user);
			// return;

			if (!self.connexionForm.$valid) {
				return;
			}
			console.log('connecting...');

			self.connexionForm.mainError = null;

			userService.connect(self.credentials)
				.success(function (data) {
					console.log('success', data);
					var user = { pseudo: 'Toto' };
					userService.setUser(user);
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