'use strict';

angular.module('contactsMgr')

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/add-contact', {
		controller: 'addContactCtrl',
		templateUrl: 'add-contact/add-contact.html',
		secure: true
	});
}])

.controller('addContactCtrl', function() {


})

;