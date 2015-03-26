/**
 * Created by Zeeshan on 3/25/2015.
 */

angular.module('app1.0')
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
    .controller('PagesCtrl', function ($scope, userObject) {
        if(userObject.username.length && userObject.password.length )
            $scope.user = userObject;
    });