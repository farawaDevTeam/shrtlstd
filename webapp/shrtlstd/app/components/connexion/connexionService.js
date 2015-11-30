angular.module('connexionModule')
	.factory('connexionService', function (appConfig, $http, $window) {
		'use strict';

		$window.fbAsyncInit = function () {
			$window.FB.init({
				appId: '{your-app-id}',
				cookie: true,  // enable cookies to allow the server to access 
				// the session
				xfbml: true,  // parse social plugins on this page
				version: 'v2.2' // use version 2.2
			});
		};

		var connexionService = {};

		connexionService.connect = function (credentials) {
			return $http.post(appConfig.api.url + '/authenticate',
				'login=' + credentials.login + '&password=' + credentials.password,
				{
					headers: { 'content-type': 'application/x-www-form-urlencoded' }
				});
		};

		connexionService.getUser = function () {
			return connexionService.user;
		};

		connexionService.setUser = function (user) {
			connexionService.user = user;
		};

		return connexionService;
	});