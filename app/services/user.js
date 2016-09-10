'use strict';

angular.module('contactsMgr')

.factory('user', ['$cookies', '$location', '$rootScope', '$route', function($cookies, $location, $rootScope, $route) {
	var authKey = 'auth';
	function isAuthenticated() {
		return $cookies.get(authKey);
	}

	$rootScope.$on('$routeChangeSuccess', function(event, next, current) {
		if (next.secure) {
			if (!isAuthenticated()) {
				$location.path('/');
			}
		}
	});

	return {
		login: function(loginData) {
			if (loginData.username === 'admin' && loginData.password === 'admin') {
				$cookies.put(authKey, 'true');
				$location.path('/');
			}
		},
		logout: function() {
			$cookies.remove(authKey);
		},
		isAuthenticated: function() {
			return isAuthenticated();
		}
	};

}]);