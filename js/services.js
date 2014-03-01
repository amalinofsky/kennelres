var wtrRestServices = angular.module('wtrRestServices', [ 'ngResource' ]);

wtrRestServices.factory('Users', [ '$resource', function($resource) {
	return $resource('https://baggageapi-qa2.elasticbeanstalk.com/baggage/admin/v3/organization/:org/users', {
		callback : 'JSON_CALLBACK'
	}, {
		get : {
			method : 'JSONP',
			//params : {
			//	org : 'mh'
			//	callback : 'fn',
			//},
			//isArray : false
		}
	});
} ]);