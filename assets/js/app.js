(function(){
	'use strict';
	
	angular.module('MsgApp', [])
	.controller('MsgController', MsgController);
	
	MsgController.$inject = ['$scope'];
	function MsgController($scope){
		$scope.name = "Zelkey";
		$scope.stateOfBeing = "bored";
		
		$scope.sayMessage = function(){
			return "Poke Me because I'm bored and I have nothing to do!";
		}
		
		$scope.pokeZelkey = function(){
			$scope.stateOfBeing = "poked";
			$scope.sayMessage = function(){
				return "You Dare Poke Me! Come HERE!";
			}
		}
		
		$scope.unpokeZelkey = function(){
			$scope.stateOfBeing = "bored";
			$scope.sayMessage = function(){
				return "You're no fun.";
			}
		}
	}
  
})();