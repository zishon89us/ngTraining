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
                templateUrl:'templates/pages.html'

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
    })
    .controller('LoginCtrl', function ($scope, userObject, $state) {

        //empty object
        userObject.username = '';
        userObject.password = '';

        //login user
        $scope.login = function () {
            userObject.username = $scope.username;
            userObject.password = $scope.password;
            $state.go('home');
        }
    })
    .controller('SignUpCtrl', function ($scope) {
         //signup user
        $scope.signup = function () {
            userObject.username = $scope.username;
            userObject.password = $scope.password;
            $state.go('home');
        }
    })
    .controller('HomeCtrl', function ($scope, userObject) {
        if(userObject.username.length && userObject.password.length )
            $scope.user = userObject;
    })
    .controller('ContactsCtrl', function ($scope, userObject) {
        if(userObject.username.length && userObject.password.length )
            $scope.user = userObject;

    })
    .controller('CareersCtrl', function ($scope, userObject) {
        if(userObject.username.length && userObject.password.length )
            $scope.user = userObject;
    })
    .directive('header', function () {
        return {
            restricts: 'A',
            scope:{
                'user':'='
            },
            templateUrl: 'components/header.html',
            controller: function ($scope) {
            }
        }
    })
    .directive('footer', function () {
        return {
            restricts: 'A',
            templateUrl: 'components/footer.html',
            controller: function ($scope) {
            }
        }
    })
