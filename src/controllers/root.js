

angular.module('app')

.directive('gameTree', [
  function(){
    return {
      templateUrl: "tree.html"
    }
  }])

.controller('RootController', [
  '$scope', '$timeout', 'user', '$mdSidenav', '$rootScope',
  function($scope, $timeout, user, $mdSidenav, $rootScope){

  $scope.user = user

  $rootScope.game = {  
    "rooms":[
      {
        "key":"0",
        "type":"lobbyRoom",
        "name":"Initial Lobby",
        "root":true,
        "links":[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "parent": "0"
      },
      {
        "key":"1",
        "type":"lobbyRoom",
        "name":"Sala 1",
        "links":[],
        "parent": "0"
      },
      {
        "key":"2",
        "type":"lobbyRoom",
        "name":"Sala 2",
        "links":[],
        "parent": "0"
      },
      {
        "key":"3",
        "type":"learningRoom",
        "name":"Static Techniques",
        "learningObjectives":[
          {
            "title":"LO 3.1",
            "content":"Recalling some stuff"
          },
          {
            "title":"LO 3.2",
            "content":"Recalling some stuff stuff stuff"
          },
          {
            "title":"LO 3.3",
            "content":"Recalling some stuff"
          },
          {
            "title":"LO 3.4",
            "content":"Recalling some stuff extra extra extra"
          }
        ],
        "contents":[
          {
            "title":"3.1 Information stuff",
            "content":"content 3 extra extra"
          },
          {
            "title":"3.2 Related stuff",
            "content":"content 3"
          },
          {
            "title":"Extra stufferino",
            "content":"content 3"
          }
        ],
        "links":[
          "3.1",
          "3.2",
          "3.3"
        ],
        "parent": "0"
      },
      {
        "key":"3.1",
        "type":"learningRoom",
        "name":"Static Techniques and Test Process",
        "learningObjectives":[
          {
            "title":"Learning Objectives",
            "content":"LOs"
          }
        ],
        "contents":[
          {
            "title":"Learning Contents",
            "content":"content 3.1"
          }
        ],
        "challenges":[
          {
            "type":"Multiple Choice",
            "exercises": [
              {
                "statement":"Static testing techniques ...",
                "answer":"d",
                "options":[
                  "d",
                  "u",
                  "r"
                ]
              },
              {
                "statement":"Static testing techniques ...",
                "answer":"d",
                "options":[
                  "d",
                  "u",
                  "r"
                ]
              }
            ]
          },
          {
            "type":"Multiple Choice",
            "exercises": [
              {
                "statement":"Static testing techniques ...",
                "answer":"d",
                "options":[
                  "d",
                  "u",
                  "r"
                ]
              },
              {
                "statement":"Static testing techniques ...",
                "answer":"d",
                "options":[
                  "d",
                  "u",
                  "r"
                ]
              }
            ]
          }
        ],
        "links":[],
        "next": "3.2",
        "parent": "3"
      },
      {
        "key":"3.2",
        "type":"learningRoom",
        "name":"Review Process",
        "learningObjectives":[
          {
            "title":"Learning Objectives",
            "content":"LOs"
          }
        ],
        "contents":[
          {
            "title":"Learning Contents",
            "content":"content 3.2"
          }
        ],
        "challenges":[
          {
            "type":"Find the Word",
            "exercises":[
              {
                "statement":"Sentence with useful information to guess the word.",
                "answer":"rework",
                "helper":"This is help.",
                "helpUsed":false
              },
              {
                "statement":"Sentence with useful information to guess the word.",
                "answer":"rework",
                "helper":"This is help.",
                "helpUsed":false
              },
              {
                "statement":"Sentence with useful information to guess the word.",
                "answer":"rework",
                "helper":"This is help.",
                "helpUsed":false
              }
            ]
          }
        ],
        "links":[],
        "next": "3.3",
        "previous": "3.1",
        "parent": "3"
      },
      {
        "key":"3.3",
        "type":"learningRoom",
        "name":"Static Analysis by Tools",
        "learningObjectives":[
          {
            "title":"Learning Objectives",
            "content":"LOs"
          }
        ],
        "contents":[
          {
            "title":"Learning Contents",
            "content":"content 3.3"
          }
        ],
        "challenges":[
          {
            "type":"Select the Keywords",
            "exercises":[
              {
                "statement":"Sentence with useful information to explain the exercise",
                "topics" : {
                  "a": {
                    "label": "A label"
                  },
                  "b": {
                    "label": "B label"
                  },
                  "c": {
                    "label": "C label"
                  }
                },
                "items": [
                  {
                    "topic": "a",
                    "concept": "a1",
                    // "selected" : true|false,
                    // "correct" : true
                  },
                  {
                    "topic": "a",
                    "concept": "a2"
                  },
                  {
                    "topic": "a",
                    "concept": "a3"
                  },
                  {
                    "topic": "a",
                    "concept": "a4"
                  },
                  {
                    "topic": "b",
                    "concept": "b1"
                  },
                  {
                    "topic": "b",
                    "concept": "b2"
                  },
                  {
                    "topic": "b",
                    "concept": "b3"
                  },
                  {
                    "topic": "b",
                    "concept": "b4"
                  },
                  {
                    "topic": "c",
                    "concept": "c1"
                  },
                  {
                    "topic": "c",
                    "concept": "c2"
                  },
                  {
                    "topic": "c",
                    "concept": "c3"
                  },
                  {
                    "topic": "c",
                    "concept": "c4"
                  },
                ]
              }
            ]
          }
        ],
        "links":["3.3.1"],
        "previous": "3.2",
        "parent": "3"
      },
      {
        "key":"3.3.1",
        "type":"lobbyRoom",
        "name":"Sala 3.3.1",
        "links":[],
        "parent": "3.3"
      },
      {
        "key":"4",
        "type":"lobbyRoom",
        "name":"Sala 4",
        "links":[],
        "parent": "0"
      },
      {
        "key":"5",
        "type":"lobbyRoom",
        "name":"Sala 5",
        "links":[],
        "parent": "0"
      },
      {
        "key":"6",
        "type":"lobbyRoom",
        "name":"Sala 6",
        "links":[],
        "parent": "0"
      }
    ]
  }

  $rootScope.createGameTree = function(jsonFile){

    $scope.roomMap = _.keyBy(_.cloneDeep(jsonFile.rooms), "key")
    _.each($scope.roomMap, function(room){

      _.each(room.links, function(link){

        room.linkedRooms = room.linkedRooms || []
        room.linkedRooms.push($scope.roomMap[link])

      })
    })

    user.reset()
    $rootScope.at = getRootRoom()
  }

  $rootScope.createGameTree($rootScope.game)

  $scope.calcPotentialRoomTreePoints = function(roomKey){

    var visited = {}
    var total = 0
    function visitRoom(roomKey){

      if (visited[roomKey]) return
      var room = $scope.roomMap[roomKey]
      if (room.challenges != undefined) 
        _.each(room.challenges, function(challenge){
          if(challenge.exercises)
            total += challenge.exercises.length
        })   
      visited[roomKey] = true
      _.each(room.links, function(linkedRoomKey){
        visitRoom(linkedRoomKey)
      })
    }
    visitRoom(roomKey)
    return total
  }

  $scope.calcUserRoomTreePoints = function(roomKey){

    var visited = {}
    var total = 0
    function visitRoom(roomKey){    

      if (visited[roomKey]) return
      var room = $scope.roomMap[roomKey]
      
      if (user.challengeCompleted[roomKey])
        total += user.challengeCompleted[roomKey].points

      visited[roomKey] = true
      _.each(room.links, function(linkedRoomKey){
        visitRoom(linkedRoomKey)
      })
    }
    visitRoom(roomKey)
    return total
  }

  $rootScope.at = getRootRoom()
  $scope.rootRoom = getRootRoom()


  function getRootRoom(){
    for(x in $rootScope.game.rooms){
      if($rootScope.game.rooms[x].root == true)
        return $rootScope.game.rooms[x]
    }
  }

  $scope.getRoom = function(key){
    return $scope.roomMap[key]
  }

  $scope.go = function(roomKey){
    $rootScope.at = $scope.getRoom(roomKey)
  }

  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    }
  }

}])

