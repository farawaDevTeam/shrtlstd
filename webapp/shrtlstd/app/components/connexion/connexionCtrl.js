angular.module('connexionModule', [])
	.controller('connexionCtrl', function (langService, userService, formService) {
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
			self.connexionForm = formService.cleanFieldError(self.connexionForm);
			
			if (!self.connexionForm.$valid) {
				return;
			}
			console.log('connecting...');

			userService.connect(self.credentials)
				.success(function (data) {
					console.log('success', data);
					var user = { pseudo: 'Toto' };
					userService.setUser(user);
				})
				.error(function (err) {
					self.connexionForm = formService.manageError(err, self.connexionForm, self.labels.forms.errors.unknown);
				});
		};
	});