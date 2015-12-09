/**
 * Created by Bebz on 17/09/2015.
 */

 angular.module('shrtlstdModule', 
    [
        'ui.router',
        'ngDialog',
        
        'shrtlstdConfigModule',
        'servicesModule',
        'directivesModule',
         
        'preHomeModule', 
        'homeModule',
        //'popUpModule',
        'connexionModule',
        // 'langModule',
        // 'scrollModule',
        'ngMessages',
        'mainModule'
        ])
 .config(function($stateProvider, $urlRouterProvider){
    'use strict';

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('preHome',
    {
        url: '/',
        templateUrl: 'components/preHome/preHome.html',
        controller: 'preHomeCtrl as ctrl'
    });

    $stateProvider.state('home',
    {
        url: '/home',
        templateUrl: 'components/home/home.html',
        controller: 'homeCtrl as ctrl'
    });
});