var interactiveMapApp =angular.module('interactiveMapApp', []);
interactiveMapApp.controller('interactiveMapCtrl', function($scope){
	resetStates();
	$scope.states = states;

	$scope.stateClicked = function(state){
		var newColor = getNewColor(state);
	}
	function getNewColor(state){
		if(state.stateColor == 'red'){
			state.stateColor = 'blue';
		}else if (state.stateColor == 'blue'){
			state.stateColor = 'open';
		}else if (state.stateColor == 'open'){
			state.stateColor = 'red';
		}else{
			return "you in the green party homes??";
		}
	}
});