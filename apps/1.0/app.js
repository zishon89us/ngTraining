/**
 * Created by Zeeshan on 3/21/2015.
 */

angular.module('app1.0', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'templates/signup.html',
                controller: 'SignUpCtrl'
            })
            .state('pages',{
                abstract:true,
                templateUrl:'templates/pages.html',
                controller: 'PagesCtrl'

            })
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .state('pages.contacts', {
                url: '/contacts',
                templateUrl: 'templates/contacts.html',
                controller: 'ContactsCtrl'
            })
            .state('pages.careers', {
                url: '/careers',
                templateUrl: 'templates/careers.html',
                controller: 'CareersCtrl'
            });

        $urlRouterProvider.otherwise("/login");

        $locationProvider.hashPrefix('!');

    })
    .value('userObject',{
        username:'',
        password:''
    });
