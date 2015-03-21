/**
 * Created by Zeeshan on 3/21/2015.
 */

angular.module('app1.0', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

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
            .state('home', {
                url: '/home',
                templateUrl: 'templates/hoem.html',
                controller: 'HomeCtrl'
            })
            .state('contacts', {
                url: '/contacts',
                templateUrl: 'templates/contacts.html',
                controller: 'ContactsCtrl'
            });

        $urlRouterProvider.otherwise("/login");

    })
    .controller('LoginCtrl', function () {
    })
    .controller('SignUpCtrl', function () {
    })
    .controller('HomeCtrl', function () {
    })
    .controller('ContactsCtrl', function () {
    });