angular.module('servicesModule')
	.factory('langService', function($http, $window){
		'use strict';
		
		var langFactory = {};
		
		langFactory.getLabels = function(cb){
			var langName = $window.sessionStorage.langName ? $window.sessionStorage.langName : navigator.language;
			
			if(!langFactory[langName]){
			
				$http.get('components/langs/' + langName + '.json')
					.success(function(labels){
						langFactory[langName] = labels;
						cb && cb(langFactory[langName]);
					});
			}
			else{
				cb && cb(langFactory[langName]);
			}
		};
		
		return langFactory;
	});