'use strict';

angular.module('contactsMgr')

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {
		controller: 'LoginCtrl',
		controllerAs: 'loginCtrl',
		templateUrl: 'login/login.html'
	});
}])

.controller('LoginCtrl', ['user', function(user) {
	var loginCtrl = this;

	loginCtrl.loginInfo = {
		username: '',
		password: ''
	};

	loginCtrl.login = function() {
		user.login(loginCtrl.loginInfo);
	};
}])
;