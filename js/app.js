define(function (require) {
 // 'use strict';

  var angular = require('angular');
  //var services = require('./services/services');
  //var controllers = require('./controllers/controllers');
  //var directives = require('./directives/directives');

  var app = angular.module('requireJSLoader', []).controller('page1Controller', function($scope) {
		console.log("Page 1 Controller stuff here..");
		$scope.myVar1 = "This is sample variable";
	}).controller('page2Controller', function($scope) {
		console.log("Page 2 Controller stuff here..");
	});

  app.init = function () {
      angular.bootstrap(document, ['requireJSLoader']);
  };
 /* app.config(['$routeProvider',
      function ($routeProvider) {
          $httpProvider.responseInterceptors.push('httpInterceptor');

          $routeProvider
              .when('/', { templateUrl: 'partials/page1', controller: 'page1Controller' })
              .when('/', { templateUrl: 'partials/page2', controller: 'page2Controller' })
             /*.when('/', { templateUrl: 'partials/page3', controller: 'page3Controller' })
             .when('/', { templateUrl: 'partials/page4', controller: 'page4Controller' })
             .when('/', { templateUrl: 'partials/page5', controller: 'page5Controller' })
             .otherwise({ redirectTo: '/' });

         // $locationProvider.html5Mode(true);
      }
  ]);*/

  app.run(function ($window) {
     // auth.setAuthorizationHeaders();
     // user.initialize();
     console.log("App Running...");
  });

  return app;
});