'use strict';

(function() {

	angular.module('contactsMgr')

	.directive('cnNavbar', function() {
		return {
			restrict: 'E',
			templateUrl: 'navbar/navbar.html',
			controller: ['navBarService', function(navBarService) {
				this.navBarService = navBarService;
			}],
			controllerAs: 'navBarCtrl'
		};
	});

})();