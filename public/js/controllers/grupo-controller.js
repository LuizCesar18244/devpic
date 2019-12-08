(function(){
    'use strict';

    angular.module('alurapic').controller('GrupoController', GrupoController)

    function GrupoController($scope, $http) {

        init();

        function init() { 
            $scope.grupos = [];

            $http.get('v1/grupos')
                .success( grupos => $scope.grupos = grupos)
                .error(erro => console.log(erro));
        }
    }
})();