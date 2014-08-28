/**
 * @author n.laxman.walkoli
 */
/*globals angular*/
//"use strict";
define(function (angular) {
var controller = angular.module('controllers', []).controller('page1Controller', function($scope) {
	console.log("Page 1 Controller stuff here..");
	$scope.myVar1 = "This is sample variable";
	
}).controller('page2Controller', function($scope) {
	console.log("Page 2 Controller stuff here..");
});

return controller;
});
