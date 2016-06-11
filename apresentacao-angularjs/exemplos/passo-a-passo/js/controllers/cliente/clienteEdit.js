
angular.module('app.controllers')
	.controller("ClienteEditCtrl", ['$scope', '$routeParams', function ($scope, $routeParams) {
		$scope.cliente = $scope.clientes[$routeParams.index];
	}]);
