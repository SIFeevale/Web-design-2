
angular.module('app.controllers')
	.controller('ClienteListCtrl', ['$scope', function ($scope) {

	    $scope.remover = function(index){
			$scope.clientes.splice(index,1);
		};

		$scope.ordenarPor = function (campo) {
			$scope.criterioDeOrdenacao = campo;
			$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
		};
	
	}]);