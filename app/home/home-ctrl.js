'use strict';

angular.module('contactsMgr')

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'HomeCtrl',
		templateUrl: 'home/home.html',
		controllerAs: 'homeCtrl',
		resolve: {
			contacts: ['contactsService', function(contactsService) {
				return contactsService.getAll();
			}]
		}
	});
}])

.controller('HomeCtrl', function(contacts) {
	var homeCtrl = this;
	homeCtrl.contacts = contacts;
})
;