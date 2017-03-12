var app = angular.module('app', []);
app.controller('clienteController', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://localhost:40761/api/ClientesWebAPI/Getcliente'
    }).then(function (success) {
        $scope.listaclientes = success.data;
    }, function (error) {
        $scope.erro = "Erro: Não possível carregar a listagem de clientes.";
    });
});
