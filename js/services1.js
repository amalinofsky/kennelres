var wtrRestServices = angular.module('wtrRestServices', [ 'ngResource' ]);

wtrRestServices.factory('Users', [ '$http', function($http) {
	var url = 'https://baggageapi-qa2.elasticbeanstalk.com/baggage/admin/v3/organization/:org/users?callback=fn';
	return $http.jsonp(url).success(function(data) {
        
    });
} ]);