(function(){
    'use strict';

    angular.module('meusServicos', ['ngResource'])
    .service('resourceService', resourceService)
    .service('cadastroDeFotos', cadastroDeFotos)

    function resourceService($resource) {

        return $resource('v1/fotos/:fotoId',null, {
            update: {
                method: 'PUT'
            }
        });
    }

    function cadastroDeFotos(resourceService, $q, $rootScope){

        var service = {};
        var evento = 'fotoCadastrada';
        
        service.cadastrar = function(foto) {
            return $q((resolve, reject) =>{

                if(foto._id){
                    resourceService.update({fotoId: foto._id}, foto, () =>{
                        $rootScope.$broadcast(evento);
                        resolve({
                            mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso',
                            inclusao: false
                        });
                    }, (erro) => {
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível atualizar a foto ' + foto.titulo
                        });
                    });
                }
                else{
                    resourceService.save(foto, () => {
                        $rootScope.$broadcast(evento);
                        resolve({
                            mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso',
                            inclusao: true
                        });
                    },
                    (erro) => {
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível incluir a foto ' + foto.titulo
                        });
                    }
                    );
                }
            });
        }
        return service;
    }
})();