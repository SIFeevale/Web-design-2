
var app = angular.module('app', ['ngRoute','app.controllers']);

angular.module('app.controllers',[]);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when("/cliente", {
		templateUrl : 'views/cliente/list.html',
		controller : 'ClienteListCtrl'
	})
	.when("/cliente/new", {
		templateUrl : 'views/cliente/new.html',
		controller : 'ClienteNewCtrl'
	})
	.when("/cliente/:index/edit", {
		templateUrl : 'views/cliente/edit.html',
		controller : 'ClienteEditCtrl'
	})
	.when("/cliente/:index/remove", {
		templateUrl : 'views/cliente/remove.html',
		controller : 'ClienteRemoveCtrl'
	})
	.otherwise({ redirectTo: '/cliente'});
}]);



