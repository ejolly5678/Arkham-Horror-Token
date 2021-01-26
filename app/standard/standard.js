'use strict';

angular.module('myApp.standard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/standard', {
    templateUrl: 'standard/standard.html',
    controller: 'standardCtrl'
  });
}])

.controller('standardCtrl', [function() {

}]);
