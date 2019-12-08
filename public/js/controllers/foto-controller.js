(function(){
    'use strict';

    angular.module('alurapic').controller('FotoController', FotoController)

    function FotoController($scope, $resource, resourceService, $routeParams, cadastroDeFotos) {

        init();
        
        function init() {
            $scope.foto = {};
            $scope.mensagem ='';

            if($routeParams.fotoId){
                resourceService.get({fotoId: $routeParams.fotoId} ,
                    foto => $scope.foto = foto,
                    erro => console.log(erro)
                );
            }
        }

        $scope.envia = function () {
            cadastroDeFotos.cadastrar($scope.foto)
            .then( (response) => {
                $scope.mensagem = response.mensagem;
            })
            .catch( erro => console.log(erro));
        }
    }
})();