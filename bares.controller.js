app
    .controller('baresDaCidadeController', ['baresService','barService','CarrinhoService','$scope',function(baresService,barService,CarrinhoService,$scope) {

        $scope.buscaTodos = function() {
            baresService.buscaTodos().then(function(response) {
                $scope.baress = response.data;
            }, function(error) {
                console.error(error);
            });
        }
        $scope.buscaTodos();

        $scope.procuraBar = function(palavra) {
            baresService.procura(palavra).then(function(response) {
                $scope.baress = response.data;
            }, function(error) {
                console.error(error);
            });
        }


        $scope.salvarBar = function(bare) {
            if (bares.hasOwnProperty('_id')) {
                baresService.alterar(bar._id, bar).then(function(response) {
                    $scope.buscaTodos();
                }, function(error) {
                    console.error(error);
                });
            } else {
                baresService.salvar(bares).then(function(response) {
                    $scope.buscaTodos();
                }, function(error) {
                    console.error(error);
                });
            }
            $scope.bares = {};
        }
        $scope.alterarbares = function(bares) {
            $scope.bares = angular.copy(bares);
        }

        $scope.removerbares = function(bares) {
            if (confirm('Tem certeza que deseja remover o bares ' + bares.nome + '?')) {
                baresService.remover(bares._id).then(function(response) {
                    $scope.buscaTodos();
                }, function(error) {
                    console.error(error);
                });
            }
        }

        $scope.buscaTodasbars = function() {
            barService.buscaTodos().then(function(response) {
                $scope.bars = response.data;
            }, function(error) {
                console.error(error);
            });
        }
        $scope.buscaTodasbars();

        $scope.salvarbar = function(bar) {
            if (bar.hasOwnProperty('_id')) {
                barService.alterar(bar._id, bar).then(function(response) {
                    $scope.buscaTodasbars();
                }, function(error) {
                    console.error(error);
                });
            } else {
                barService.salvar(bar).then(function(response) {
                    $scope.buscaTodasbars();
                }, function(error) {
                    console.error(error);
                });
            }
            $scope.bar = {};
        }
        $scope.alterarbar = function(bar) {
            $scope.bar = angular.copy(bar);
        }

        $scope.removerbar = function(bar) {
            if (confirm('Tem certeza que deseja remover o bar ' + bar.nome + '?')) {
                barService.remover(bar._id).then(function(response) {
                    $scope.buscaTodasbars();
                }, function(error) {
                    console.error(error);
                });
            }
        }



        $scope.carrinho = [];

        $scope.adicionarCarrinho = function(bar) {
            $scope.carrinho.push(angular.copy(bar));
            bar.carrinho = bar.carrinho || 0
            bar.carrinho++;
        }
        $scope.limpaCarrinho = function() {
            $scope.carrinho = [];
            angular.forEach($scope.bars, function(bar, index) {
                bar.carrinho = 0;
            });
        }

}]);
