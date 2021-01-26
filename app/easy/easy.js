'use strict';

angular.module('myApp.easy', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/easy', {
    templateUrl: 'easy/easy.html',
    controller: 'easyCtrl'
  });
}])

.controller('easyCtrl', [function() {

}]);

var easyDice = ["one", "one", "zero", "zero", "zero", "negOne", "negOne", "negOne",
                "negTwo", "negTwo", "skull", "skull", "hooded", "tablet", "tenticles"
                "star"]
