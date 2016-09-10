'use strict';

(function() {

	angular.module('contactsMgr')

	.directive('cnNavbar', function() {
		return {
			restrict: 'E',
			templateUrl: 'navbar/navbar.html',
			controllerAs: 'navBarCtrl',
			controller: ['$location', 'user', function($location, user) {
				this.$location = $location;
				this.user = user;
			}]
		};
	});

})();