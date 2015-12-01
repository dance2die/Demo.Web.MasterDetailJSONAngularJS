/**
 * Created by dance2die on 12/1/2015.
 */
(function(){
    angular.module('myApp')
        .factory('customerService', ['$http', function customerServiceFactory($http){
            return {
                getAllCustomers : function(){
                    return $http.get('http://inorthwind.azurewebsites.net/Service1.svc/getAllCustomers');
                },
                getBasketsForCustomer: function(customerId){
                    return $http.get('http://inorthwind.azurewebsites.net/Service1.svc/getBasketsForCustomer/' + customerId)
                }
            };
        }]);
})();