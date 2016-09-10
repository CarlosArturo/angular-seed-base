'use strict';

angular.module('contactsMgr')

.factory('navBarService', ['$location', function($location) {
	return {
		getActiveItem: function() {
			return $location.url().indexOf('/add-contact') > -1
				? 'add' : 'browse';
		}
	}; 
}]);