
(function () {
    'use strict';

    angular.module('alurapic').
            controller('FotosController', FotosController);

    function FotosController($scope, resourceService) {
        init();
        
        function init() {
            $scope.filtro = '';     
            $scope.mensagem = '';     
            resourceService.query( fotos => $scope.fotos = fotos ,  erro => console.log(erro));
        }

        $scope.remover = function (foto){
            resourceService.delete({fotoId: foto._id}, 
                () =>{
                    let indiceFoto = $scope.fotos.indexOf(foto);
                    $scope.fotos.splice(indiceFoto, 1);
                    $scope.mensagem = 'Foto excluída como sucesso!'
            }, erro => console.log(erro));
        }
    }
}());