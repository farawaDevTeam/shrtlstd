/**
 * Created by Bebz on 17/09/2015.
 */

angular.module('homeModule', [])
    .controller('homeCtrl', function(){
        'use strict';
        var self = this;

        self.colSizeLgMd = {
        	0: 6,
        	1: 4,
        	2: 2,
        	3: 3,
        	4: 6,
        	5: 3
        };

        self.getMosaic = function(index){
        	var divClass = {};
        	divClass['col-lg-' + self.colSizeLgMd[index]] = true;
        	divClass['col-md-' + self.colSizeLgMd[index]] = true;
        	return divClass;
        };

        self.lastcompets = [{
        	img : '1.jpg',
			projetId: 'RYhPKITz',
			nom: 'Refonde du logo',
			fileName: null,
			nbEquipeMax: 2,
			nbUserByEquipe: 3,
			dateDepot: '2015-10-26',
			dateFin: '2015-12-25',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			recompense: 'poste',
			user: {
				login: null,
				userType: null,
				roles: null,
				pseudo: 'pro',
				nom: 'pro',
				prenom: '',
				avatar: null,
				situationPro: null,
				metier: null,
				entreprise: 'Apple',
				description: null,
				sitePerso: null,
				sitePro: ''
			}
		}, 
		{
			img : '2.jpg',
			projetId: 'RYhPKITz',
			nom: 'Campagne de pub Galaxy S6 Edge',
			fileName: null,
			nbEquipeMax: 2,
			nbUserByEquipe: 3,
			dateDepot: '2015-10-26',
			dateFin: '2015-12-25',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			recompense: 'poste',
			user: {
				login: null,
				userType: null,
				roles: null,
				pseudo: 'pro',
				nom: 'pro',
				prenom: '',
				avatar: null,
				situationPro: null,
				metier: null,
				entreprise: 'Samsung',
				description: null,
				sitePerso: null,
				sitePro: ''
			}
		}, 
		{
			img : '3.jpg',
			projetId: 'RYhPKITz',
			nom: 'Affiche publicitaire',
			fileName: null,
			nbEquipeMax: 2,
			nbUserByEquipe: 3,
			dateDepot: '2015-10-26',
			dateFin: '2015-12-25',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			recompense: 'poste',
			user: {
				login: null,
				userType: null,
				roles: null,
				pseudo: 'pro',
				nom: 'pro',
				prenom: '',
				avatar: null,
				situationPro: null,
				metier: null,
				entreprise: 'Lidl',
				description: null,
				sitePerso: null,
				sitePro: ''
			}
		}, 
		{
			img : '4.jpg',
			projetId: 'RYhPKITz',
			nom: 'Stratégie de communication',
			fileName: null,
			nbEquipeMax: 2,
			nbUserByEquipe: 3,
			dateDepot: '2015-10-26',
			dateFin: '2015-12-25',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			recompense: 'poste',
			user: {
				login: null,
				userType: null,
				roles: null,
				pseudo: 'pro',
				nom: 'pro',
				prenom: '',
				avatar: null,
				situationPro: null,
				metier: null,
				entreprise: 'AccorHotels',
				description: null,
				sitePerso: null,
				sitePro: ''
			}
		}, 
		{
			img : '1.jpg',
			projetId: 'RYhPKITz',
			nom: 'Vidéo',
			fileName: null,
			nbEquipeMax: 2,
			nbUserByEquipe: 3,
			dateDepot: '2015-10-26',
			dateFin: '2015-12-25',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			recompense: 'poste',
			user: {
				login: null,
				userType: null,
				roles: null,
				pseudo: 'pro',
				nom: 'pro',
				prenom: '',
				avatar: null,
				situationPro: null,
				metier: null,
				entreprise: 'SFR',
				description: null,
				sitePerso: null,
				sitePro: ''
			}
		}, 
		{
			img : '5.jpg',
			projetId: 'RYhPKITz',
			nom: 'Powerpoint',
			fileName: null,
			nbEquipeMax: 2,
			nbUserByEquipe: 3,
			dateDepot: '2015-10-26',
			dateFin: '2015-12-25',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			recompense: 'poste',
			user: {
				login: null,
				userType: null,
				roles: null,
				pseudo: 'pro',
				nom: 'pro',
				prenom: '',
				avatar: null,
				situationPro: null,
				metier: null,
				entreprise: 'H&M',
				description: null,
				sitePerso: null,
				sitePro: ''
			}
		}];
 
    });
