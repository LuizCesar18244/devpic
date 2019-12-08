(function () {
    'use strict';

    angular.module('minhasDiretivas', [])
    .directive('meuPainel', meuPainel)
    .directive('minhaFoto', minhaFoto)
    .directive('buttonDelete', buttonDelete)
    .directive('meuFocus', meuFocus);

    function meuPainel() {
        return {
            restrict: 'AE',
            scope: { 
                titulo: '@'
            },
            transclude : true,
            templateUrl : 'js/directives/meu-painel.html'
        }
    }
    function minhaFoto() {
        return {
            restrict: 'AE',
            scope: { 
                url: '@',
                titulo: '@'
            },
            templateUrl : 'js/directives/minha-foto.html'
        }
    }

    function buttonDelete(){
        return {
            restrict: 'E',
            scope: { 
                acao: '&',
                texto: '@'
            },
            template : '<button class="btn btn-danger btn-block" ng-click="acao(foto)">{{texto}}</button>'
        }

    }

    function meuFocus(){
        var ddo = {};
        ddo.restrict = "A";

        ddo.link = function(scope, element) {
             scope.$on('fotoCadastrada', function() {
                 element[0].focus();
             });
        };

        return ddo;
    }

}());