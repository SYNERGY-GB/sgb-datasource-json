'use strict';

angular.module('sgb-datasource-json', ['megazord'])
    .factory('sgb-datasource-json', ['$http', '$translate', function ($http){
        return {
            getData: function(params) {
                console.log('I GOT CALLED');
                return $http.get(params.path)
                    .then(function(result){
                        return result.data;
                    });
            }
        } ;
    }]);
