angular.module('app', ['ngMaterial', 'md.data.table'])

.controller('rootController', ['$scope', '$timeout', function($scope, $timeout){

  $scope.test = "Hola chi"
}])
