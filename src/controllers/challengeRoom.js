angular.module('app')

.controller('ChallengeRoomController', [
	'$scope', '$timeout', 'user', '$rootScope',
	function($scope, $timeout, user, $root){

  user.enterChallenge({ 
    roomKey: $root.at.key
  })
  
  $scope.multipleChoiceValidate = function(exercises){

    var totalPoints = 0
    _.each(exercises, function(ex){

  	  if (ex.selectedAnswer == ex.answer){
        totalPoints += 1
      }
    })
    
    user.updateChallengePoints({ 
      roomKey: $root.at.key,
      points: totalPoints,
    })
	}

}])