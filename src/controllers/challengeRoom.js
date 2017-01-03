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

  $scope.fillTheGapsValidate = function(challenges){

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

  $scope.helps = []
  $scope.helpClicks = 0

  $scope.getHelp = function(challenges){

    _.each(challenges, function(challenge){

      _.each(challenge.data.exercises, function(ex){

        if(ex.helpers[$scope.helpClicks] != undefined)
          
          $scope.helps.push(ex.helpers[$scope.helpClicks])

      })
    })

    $scope.helpClicks++

  }

  $scope.selectTheKeywordsValidate = function(challenges){

    var totalPoints = 0

      
    
    user.updateChallengePoints({ 
      roomKey: $root.at.key,
      points: totalPoints,
    })
  }

}])








