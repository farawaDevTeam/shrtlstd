angular.module('popUpModule', [])
	.directive('popUp', function(ngDialog){
		'use strict';
		
		return {
			restrict: 'A',
			link: function(scope, el, attr){
				
				el.bind('click', function(){
					ngDialog.close();
					ngDialog.open({ 
						template: attr.tpl + '.html' 
					});
				});
				
			}
		};
	});