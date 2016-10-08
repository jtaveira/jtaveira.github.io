angular.module('app', ['ngMaterial', 'md.data.table'])

.controller('RootController', ['$scope', '$timeout', function($scope, $timeout){

  $scope.test = "Hola chi"

  $scope.game = {}
}])
