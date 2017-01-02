angular.module('app')

.controller('ChallengeRoomController', [
	'$scope', '$timeout', 'user', '$rootScope',
	function($scope, $timeout, user, $root){

  user.enterChallenge({ 
    roomKey: $root.at.key
  })
  
  $scope.multipleChoiceValidate = function(challenges){

    var totalPoints = 0

    _.each(challenges, function(challenge){

      _.each(challenge.data.exercises, function(ex){

    	  if (ex.selectedAnswer == ex.answer){
          totalPoints += 1
        }
      })
    })
    
    user.updateChallengePoints({ 
      roomKey: $root.at.key,
      points: totalPoints,
    })
	}

}])