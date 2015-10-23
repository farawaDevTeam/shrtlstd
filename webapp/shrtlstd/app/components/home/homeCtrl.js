/**
 * Created by Bebz on 17/09/2015.
 */

angular.module('homeModule', [])
    .controller('homeCtrl', ['$http', function($http){
        'use strict';
        var self = this;

        self.message = 'toto';

        self.identification = {
        	connection : "Se connecter",
        	creation : "Créer un compte"
        }

        self.lastcompt = [];

        function displayLatestCompet() {
        	$http({method: "GET", url: "http://54.201.37.156:8080/short-listed/rest/projets/inProgress"}).
		        then(function(response) {
		          	self.status = response.status;
		          	self.data = response.data;
		          	console.log(self.data);
		        }, function(response) {
		          	self.data = response.data || "Request failed";
		         	self.status = response.status;
		         	console.log(self.data);
		    });
        }

        displayLatestCompet();
    }]);