angular.module('servicesModule')
	.factory('formService', function () {
		'use strict';

		var formService = {};

		formService.manageError = function (err, form, unknowMsg) {
			console.log(err);
			if (err.message) {
				form.mainError = err.message;
			}
			else if (err.length) {
				err.forEach(function (error) {
					form.fieldsErrors[error.field] = error.message;
					form[error.field].$setValidity('field', false);
				});
			}
			else {
				form.mainError = unknowMsg;
			}

			return form;
		};

		formService.cleanFieldError = function (form) {
			form.mainError = null;
			if (form.fieldsErrors) {
				for (var key in form.fieldsErrors) {
					form[key].$setValidity('field', true);
				}
			}
			form.fieldsErrors = {};

			return form;
		};

		return formService;
	});