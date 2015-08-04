'use strict';

angular.module('sgb-datasource-json', ['megazord'])
    .factory('sgb-datasource-json', ['$http', function ($http){
        return {
            getData: function(params) {
                return $http.get(params.path)
                    .then(function(result){
                        return result.data;
                    });
            }
        } ;
    }]);
