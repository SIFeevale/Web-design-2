angular
	.module('pessoas', ['ngRoute'])
	
	.config(function($routeProvider){

		$routeProvider
			.when('/', {
				templateUrl: 'listar.html'
			})
			.when('/pessoa/adicionar', {
				templateUrl: 'adicionar.html',
				controller : 'AdicionarCtrl'
			})
			.when('/pessoa/:index', {
				templateUrl: 'editar.html',
				controller: 'EditarCtrl'
			});

	})

	.controller('PessoasCtrl', ['$scope', function ($scope) {
		$scope.pessoas = [
			{nome: 'Maria', cidade : 'São Paulo'},
			{nome: 'João', cidade : 'Parana'},
			{nome: 'Pedro', cidade : 'Santa Catarina'},
			{nome: 'Joana', cidade : 'Rio Grande do Sul'},
			{nome: 'Silvio', cidade : 'Rio de Janeiro'}
		];	

		$scope.remover = function(index){
			$scope.pessoas.splice(index,1);
		};

	}])

	.controller('AdicionarCtrl', function ($scope) {
		
		$scope.add = function(){

			$scope.pessoas.push({
				nome: $scope.pessoa.nome,
				cidade: $scope.pessoa.cidade
			});

			$scope.pessoa = "";
			$scope.result = "Registro adicionado com sucesso!";

		};

		$scope.remover = function(index){	
      		$scope.pessoas.splice(index,1);     
      	};

	})

	.controller('EditarCtrl', function ($scope, $routeParams) {
		$scope.pessoa = $scope.pessoas[$routeParams.index];	
	});