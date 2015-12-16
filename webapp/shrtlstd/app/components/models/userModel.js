angular.module('modelsModule')
	.factory('User', function () {
		'use strict';

		var User = function (login, password, pseudo, nom, prenom, avatar, situationPro, entreprise, sitePro, sitePerso, userType, metier) {
			this.login = login;
			this.password = password;
			this.pseudo = pseudo;
			this.nom = nom;
			this.prenom = prenom;
			this.avatar = avatar;
			this.situationPro = situationPro;
			this.entreprise = entreprise;
			this.sitePro = sitePro;
			this.sitePerso = sitePerso;
			this.userType = userType;
			this.metier = metier;
		};

		return User;
	});