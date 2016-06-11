
angular.module('app.controllers')
	.controller("ClienteNewCtrl", ['$scope', '$location', function ($scope, $location) {
		$scope.add = function(cliente){

			$scope.clientes.push({
				nome: cliente.nome,
				telefone: cliente.telefone,
				saldo: cliente.saldo,
				estado: cliente.estado
			});
			$scope.cliente = "";
			$location.path("/");
		};

		$scope.clear = function() {
	        $scope.cliente = "";
	    }	
	}]);




