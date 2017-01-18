angular.module('app')

.controller('LearningRoomController', [
	'$scope', '$timeout', 'user',
	function($scope, $timeout, user){

    var room
    $scope.contentMap  = []
    $scope.roomPointer = 0

    $scope.$watch('$parent.at', function(n, o){
      $scope.prepareRoom(n)      
    })

    $scope.next = function(){

      $scope.roomPointer++
    }

    $scope.prev = function(){

      $scope.roomPointer--
    }

    $scope.prepareRoom = function(currentRoom){
      
      $scope.contentMap  = []
      $scope.roomPointer = 0      
      room = angular.copy(currentRoom)
      
      if(room.learningObjectives != undefined)
      $scope.contentMap.push({
        type: 'LO',
        data: room.learningObjectives,
      })
      
      if(room.contents != undefined)
      _.each(room.contents, function(content){                
        $scope.contentMap.push({
          type: 'CT',
          data: content,
        })
      })

      if(room.challenges != undefined)
      _.each(room.challenges, function(challenge){        
        $scope.contentMap.push({
          type: 'CH',
          data: challenge,
        })
      })

      if(room.links.length > 0)
      $scope.contentMap.push({
        type: 'LI',
        data: room.links,
      })
    }
}])