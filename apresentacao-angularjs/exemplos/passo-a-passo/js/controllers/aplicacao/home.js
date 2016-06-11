
angular.module('app.controllers')
	.controller("HomeCtrl", ['$scope', '$routeParams', function ($scope, $routeParams) {
		$scope.clientes = [
		  	{nome: "Pedro", telefone: "9999-8888", saldo: 1789, estado: "RS"},
		  	{nome: "João", telefone: "8654-0998", saldo: 3242, estado: "SC"},
		  	{nome: "Maria", telefone: "8679-8754", saldo: 243567, estado: "SP"},
		  	{nome: "Nicole", telefone: "9583-3487", saldo: 123, estado: "RJ"}
		];

		$scope.dataEstados = {
			ufSelect: null,
			opcoes: [
			  {uf: 'RS', name: 'Rio Grande do Sul'},
			  {uf: 'SC', name: 'Santa Catarina'},
			  {uf: 'PR', name: 'Paraná'},
			  {uf: 'SP', name: 'São Paulo'},
			  {uf: 'RJ', name: 'Rio de Janeiro'}
			],
   		};
	}]);


