angular.module('app')

.controller('LearningRoomController', [
	'$scope', '$timeout', 'user',
	function($scope, $timeout, user){

    var room
    $scope.contentMap  = []
    $scope.roomPointer = 0

    $scope.$watch('$parent.at', function(n, o){
      console.log(n, o)
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
      
      $scope.contentMap.push({
        type: 'LO',
        data: room.learningObjectives,
      })
      
      _.each(room.contents, function(content){                
        $scope.contentMap.push({
          type: 'CT',
          data: content,
        })
      })

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
      console.log('>>', $scope.contentMap)
    }
}])