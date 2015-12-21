angular.module('servicesModule')
	.factory('langService', function($http, $window){
		'use strict';
		
		var langFactory = {};
		
		langFactory.getLabels = function(cb, getDefault){
			var langName;
			if(getDefault){
				langName = 'fr';
			}
			else{
				langName = $window.sessionStorage.langName ? $window.sessionStorage.langName : navigator.language.split('-')[0].toLowerCase();
			}
			
			if(!langFactory[langName]){
			
				$http.get('components/langs/' + langName + '.json')
					.success(function(labels){
						langFactory[langName] = labels;
						cb && cb(langFactory[langName]);
					})
					.error(function(err, status){
						if(status === 404){
							langFactory.getLabels(cb, true);
						}
					});
			}
			else{
				cb && cb(langFactory[langName]);
			}
		};
		
		return langFactory;
	});