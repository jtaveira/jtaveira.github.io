angular.module('app')

.controller('ChallengeRoomController', [
	'$scope', '$timeout',
	function($scope, $timeout){

  var totalPoints = 0
  
  $scope.validateAnswer = function(challenge, answer){
	  if (answer == challenge.answer){
      totalPoints += challenge.points
    }
	}

  $scope.endChallenge = function(challenge){

    user.updateChallengePoints({ 
      key: challenge.key,
      totalPoints: totalPoints,
    })
  }

}])