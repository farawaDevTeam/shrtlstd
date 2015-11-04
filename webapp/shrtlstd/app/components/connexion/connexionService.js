angular.module('connexionModule')
	.factory('connexionService', function(appConfig, $http){
		'use strict';
		
		var connexionService = {};
		
		connexionService.connect = function(credentials){
			return $http.post(appConfig.api.url + '/authenticate', 
				'login=' + credentials.login + '&password=' + credentials.password, 
				{
					headers: {'content-type': 'application/x-www-form-urlencoded'}
				});
		};
		
		return connexionService;
	});