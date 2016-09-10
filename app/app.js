'use strict';

// Declare app level module which depends on views, and components
angular.module('contactsMgr', [
  'ngRoute'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider.otherwise({redirectTo: '/'});

}])

.value('apiUrl', 'api/')

;
