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

        ex.correct = false
        if (ex.selectedAnswer == ex.answer){
          totalPoints += 1
          ex.correct = true
        }
      })
    })
    
    user.updateChallengePoints({ 
      roomKey: $root.at.key,
      points: totalPoints,
    })
	}

  $scope.findTheWordValidate = function(challenges){

    var totalPoints = 0

    _.each(challenges, function(challenge){

      _.each(challenge.data.exercises, function(ex){

        ex.correct = false
        if (ex.selectedAnswer == ex.answer){
          totalPoints += 1
          ex.correct = true
        }
      })
    })

    user.updateChallengePoints({ 
      roomKey: $root.at.key,
      points: totalPoints,
    })
  }

  function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
  }

  $scope.currentTopic = null
  $scope.options = []

  $scope.prepareKeywordChallenge = function(exercise){

    var keys = Object.keys(exercise.topics)
    shuffle(keys)
    $scope.currentTopic = keys[0]
    var options = angular.copy(exercise.items)
    shuffle(options)
    $scope.options = options.splice(0,9)

  }

  $scope.selectTheKeywordsValidate = function(exercise){

    var totalPoints = 0
    var counter = 0

    _.each($scope.options, function(v){

      v.correct = false

      if(v.selected && v.topic == $scope.currentTopic){
        counter++
        v.correct = true
      } 

      else if(!v.selected && v.topic != $scope.currentTopic){
        counter++
        v.correct = true
      } 

    })

    if(counter == $scope.options.length)
      totalPoints = 1
    
    user.updateChallengePoints({ 
      roomKey: $root.at.key,
      points: totalPoints,
    })
  }

}])








