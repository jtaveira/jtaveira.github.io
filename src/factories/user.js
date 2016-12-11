angular.module('app')

.factory('User', [ function(){

  function User(){

    this.roomsVisited = {}
    this.challengeCompleted = {}
  }

  User.prototype.enterChallenge = function(challenge){

    if (!this.challengeCompleted[challenge.roomKey]) {
      this.challengeCompleted[challenge.roomKey] = { points : 0 }      
    }    
  }

  User.prototype.updateChallengePoints = function(challenge){

    var currentPointsForRoom

    currentPointsForRoom = this.challengeCompleted[challenge.roomKey].points

    if (challenge.points > currentPointsForRoom){
      this.challengeCompleted[challenge.roomKey].points = challenge.points
    }
  }

  User.prototype.calcScore = function(challenge){

    var totalPoints = 0
    _.each(this.challengeCompleted, function(challenge){
      totalPoints += challenge.points
    })
    return totalPoints
  }

  return User
}])


.factory('user', ['User', function(User){

  return new User()
}])


