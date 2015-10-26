/**
 * Created by Bebz on 17/09/2015.
 */

angular.module('homeModule', [])
    .controller('homeCtrl', function($http){
        'use strict';
        var self = this;

        self.message = 'toto';

        self.identification = {
        	connection : 'Se connecter',
        	creation : 'Créer un compte'
        };

        self.lastcompt = [{
			projetId: "RYhPKITz"
			nom: "projet1"
			fileName: null
			nbEquipeMax: 2
			nbUserByEquipe: 3
			dateDepot: "2015-10-26"
			dateFin: "2015-12-25"
			description: "desc 1"
			recompense: "poste"
			user: {
				login: null
				userType: null
				roles: null
				pseudo: "pro"
				nom: "pro"
				prenom: ""
				avatar: null
				situationPro: null
				metier: null
				entreprise: ""
				description: null
				sitePerso: null
				sitePro: ""
				}
			}];

		auntheticate();

		/*Permet de se connecter avec un email et un mdp*/
        function auntheticate() {
        	$http({method: 'POST', url: 'http://52.25.41.26:8080/short-listed/rest/authenticate?login=root1234@gmail.com&password=Root1234$'}).
		        then(function(response) {
		          	self.status = response.status;
		          	self.data = response.data;
		          	console.log("self.data1 = ", self.data);

		          	//displayLatestCompet();

		        }, function(response) {
		          	self.data = response.data || 'Request failed';
		         	self.status = response.status;
		         	console.log("self.data2 = ", self.data);
		    });
        };

        /*function displayLatestCompet() {
        	$http({method: 'GET', url: 'http://52.25.41.26:8080/short-listed/rest/projets/inProgress'}).
		        then(function(response) {
		          	self.status = response.status;
		          	self.data = response.data;
		          	console.log("self.data1 = ", self.data);
		        }, function(response) {
		          	self.data = response.data || 'Request failed';
		         	self.status = response.status;
		         	console.log("self.data2 = ", self.data);
		    });
        }*/

        displayLatestCompet();
    });
