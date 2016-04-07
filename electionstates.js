var interactiveMapApp =angular.module('interactiveMapApp', []);
interactiveMapApp.controller('interactiveMapCtrl', function($scope){
	resetStates();
	$scope.states = states;
	calculateStateTotals();

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

	 function calculateStateTotals(){
		$scope.redStateVotes = 0;
		$scope.blueStateVotes = 0;
		$scope.openStateVotes = 0;
		for(i=0; i<numStates; i++){
			if(blueStates[i]){
				$scope.blueStateVotes+= blueStates[i].electoralVotes;
			}else if(redStates[i]){
				$scope.redStateVotes+= redStates[i].electoralVotes;
			}else if(openStates[i]){
				$scope.openStateVotes+= openStates[i].electoralVotes;
			}
		}
		$scope.blueWidth = $scope.blueStateVotes / 538 * 100 + "%";
		$scope.redWidth = $scope.redStateVotes / 538 * 100 + "%";
		$scope.openWidth = $scope.openStateVotes / 538 * 100 + "%";
	}
});