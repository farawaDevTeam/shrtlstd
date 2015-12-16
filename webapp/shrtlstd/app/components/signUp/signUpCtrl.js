angular.module('signUpModule', [])
	.controller('signUpCtrl', function (langService, userService, User, formService) {
		'use strict';

		var self = this;

		langService.getLabels(function (labels) {
			self.labels = labels;
		});
		
		self.userIsCreated = false;
		
		self.newUser = new User();
		// self.newUser = new User('toto@yopmail.com', 'Passwd1$', 'pseudo', 'nom', 'prenom', 'avatar', 'ET', 'entreprise', 'sitePro', 'sitePerso', 'C', 'IT');

		self.signUp = function () {
			self.signUpForm = formService.cleanFieldError(self.signUpForm);
			
			if (!self.signUpForm.$valid) {
				return;
			}
			userService.createUser(self.newUser)
				.success(function (data) {
					console.log('success', data);
					self.userIsCreated = true;
				})
				.error(function (err) {
					self.signUpForm = formService.manageError(err, self.signUpForm, self.labels.forms.errors.unknown);
				});
		};

	});