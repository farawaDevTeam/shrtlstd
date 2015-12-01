angular.module('connexionModule')
	.factory('connexionService', function (appConfig, $http, $window, $rootScope, ngDialog, $q) {
		'use strict';



		var connexionService = {};

		connexionService.asyncFbInit = function () {
			$window.FB.init({
				appId: appConfig.fbAppId,
				status: true,
				cookie: true,
				xfbml: true,
				version: 'v2.5'
			});
		};

		// FACEBOOK
		var statusChangeCallback = function (response) {
			// The response object is returned with a status field that lets the
			// app know the current login status of the person.
			// Full docs on the response object can be found in the documentation
			// for FB.getLoginStatus().
			if (response.status === 'connected') {
				// Logged into your app and Facebook.
				connexionService.fb.getUser().then(function(fbUser){
					connexionService.setUser({ pseudo: fbUser.name, fbId: fbUser.id });
				});
			} else if (response.status === 'not_authorized') {
				// The person is logged into Facebook, but not your app.
			} else {
				// The person is not logged into Facebook, so we're not sure if
				// they are logged into this app or not.
			}
		};

		$window.checkLoginState = function () {
			$window.FB.getLoginStatus(function (response) {
				statusChangeCallback(response);
			});
		};

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
			$rootScope.$broadcast('userConnexion', user);
			ngDialog.close();
		};

		connexionService.fb = {
			getUser: function () {
				// $window.FB.api('/me', function (response) {
				// 	connexionService.setUser({ pseudo: response.name, fbId: response.id });
				// });
				var deferred = $q.defer();
				$window.FB.api('/me', function (response) {
					if (!response || response.error) {
						deferred.reject('Error occured');
					} else {
						deferred.resolve(response);
					}
				});
				return deferred.promise;
			}
		};

		return connexionService;
	});