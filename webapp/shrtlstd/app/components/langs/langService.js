angular.module('langModule', [])
	.factory('langService', function($http){
		'use strict';
		
		var langFactory = {};
		
		langFactory.getLabels = function(langName, cb){
			
			if(!langName) return;
			
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