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

  var gameJson = {  
    "rooms":[
      {
        "key":"0",
        "type":"lobbyRoom",
        "name":"Initial Lobby",
        "root":true,
        "links":[
          "2",
          "3"
        ],
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
            "type":"Hangman",
            "exercise":{
              "statement":"Recording updated status of defects",
              "answer":"rework"
            }
          },
          {
            "type":"Hangman",
            "exercise":{
              "statement":"Defining the review criteria",
              "answer":"planning"
            }
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
            "type":"Fill The Gaps",
            "exercise":{
              "statement":"Recording updated status of defects",
              "gapHeadings":[
                {"value":"X"},
                {"value":"returnValue"},
                {"value":"W"}
              ],
              "rows":[
                {
                  "question":"double Sqrt(double X)",
                  "gaps":[
                    {"answer":"d"},{"answer":"u"},{"answer":"r"}
                  ]
                }
              ],
              "options":[
                {"value":"d"},
                {"value":"u"},
                {"value":"r"}
              ]
            }
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
      }
    ]
  }

  var roomMap = $scope.roomMap = _.keyBy(gameJson.rooms, "key")

  $scope.createGameTree = function(jsonFile){


    _.each(jsonFile.rooms, function(room){

      _.each(room.links, function(link){

        room.linkedRooms = room.linkedRooms || []
        room.linkedRooms.push($scope.roomMap[link])

      })
    })
  }

  $scope.createGameTree(gameJson)

  $scope.calcPotentialRoomTreePoints = function(roomKey){

    var visited = {}
    var total = 0
    function visitRoom(roomKey){

      if (visited[roomKey]) return
      var room = roomMap[roomKey]
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

      console.log(roomKey)

      if (visited[roomKey]) return
      var room = roomMap[roomKey]
      
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
    for(x in gameJson.rooms){
      if(gameJson.rooms[x].root == true)
        return gameJson.rooms[x]
    }
  }

  $scope.getRoom = function(key){
    return roomMap[key]
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

