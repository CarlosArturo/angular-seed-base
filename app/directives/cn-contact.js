'use strict';

angular.module('contactsMgr')

.directive('cnContact', function() {

	return {
		scope: {
			contact: '='
		},
		templateUrl: 'directives/cn-contact.html',
		restrict: 'E',
		controllerAs: 'cnContactCtrl',
		controller: ['$scope', function($scope) {
			this.contact = $scope.contact;
		}]
	};

})