(function(){
	'use strict';
	
	angular.module('firsthird', [])
	.controller('MsgController', MsgController);
	
	MsgController.$inject = ['$scope'];
	function MsgController($scope){
		
		$scope.sayMessage = function(){
			return "1st Student : Jacob Brian |-| 2nd Student : Alexander Gulag |-| 3rd Student : Malcom Jackson";
		}
		
	}
  
})();