'use strict';

angular.module('contactsMgr')

.config(['$routeProvider', function(routeProvider) {
	routeProvider.when('/contacts/:id', {
		controller: 'ShowContactCtrl',
		controllerAs: 'showContactCtrl',
		templateUrl: 'show-contact/show-contact.html',
		resolve: {
			contact: ['contactsService', '$route', function(contactsService, $route) {
				return contactsService.get($route.current.params.id);
			}]
		}
	});
}])

.controller('ShowContactCtrl', ['contact', function(contact) {
	var showContactCtrl = this;

	showContactCtrl.contact = contact;

}])

;