'use strict';

angular.module('contactsMgr')

.factory('contactsService', ['$http', 'apiUrl', function($http, apiUrl) {

	function request(method, endpoint, params) {
		return $http({
			method: method,
			url: apiUrl + endpoint,
			params: params || {}
		})
		.then(function(response) {
			return response.data;
		});
	}

	return {
		getAll: function() {
			return request('GET', 'contacts.json')
		},

		get(id) {
			return request('GET', 'contact' + id + '.json');
		}
	};

}]);