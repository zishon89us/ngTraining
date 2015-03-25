/**
 * Created by Zeeshan on 3/25/2015.
 */

angular.module('app1.0')

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