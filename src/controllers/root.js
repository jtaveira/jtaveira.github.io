angular.module('app')

.controller('RootController', [
  '$scope', '$timeout', 'user',
  function($scope, $timeout, user){

  $scope.user = user

  var gameJson = {  
    "rooms":[
      {
        "key":"0",
        "type":"lobbyRoom",
        "name":"Initial Lobby",
        "root":true,
        "links":[
          "3"
        ]
      },
      {
        "key":"3",
        "type":"learningRoom",
        "name":"Static Techniques",
        "learningObjectives":[
          {
            "title":"Learning Objectives",
            "content":"LOs"
          }
        ],
        "contents":[
          {
            "title":"Learning Contents",
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
            "type":"multipleChoice",
            "exercises":[
              {
                "statement":"Static testing techniques ...",
                "answer":"d",
                "options":[
                  {"value":"d"},
                  {"value":"u"},
                  {"value":"r"}
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
            "type":"hangman",
            "exercise":{
              "statement":"Recording updated status of defects",
              "answer":"rework"
            }
          },
          {
            "type":"hangman",
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
            "type":"fillTheGaps",
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
        "links":[],
        "previous": "3.2",
        "parent": "3"
      }
    ]
  }

  $scope.calcPotentialRoomTreePoints = function(roomKey){

    var visited = {}
    var total = 0
    function visitRoom(roomKey){

      if (visited[roomKey]) return
      var room = roomMap[roomKey]
      if (room.challenges != undefined)    
      total += room.challenges.length
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
      var room = roomMap[roomKey]
      
      if (!user.challengeCompleted[roomKey]) return
      var points = user.challengeCompleted[roomKey].points
      
      total += points
      visited[roomKey] = true
      _.each(room.links, function(linkedRoomKey){
        visitRoom(linkedRoomKey)
      })
    }
    visitRoom(roomKey)
    return total
  }

  $scope.at = getRootRoom()

  var roomMap = _.keyBy(gameJson.rooms, 'key')

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
    $scope.at = $scope.getRoom(roomKey)
  }

}])

