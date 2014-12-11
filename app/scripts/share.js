'use strict';

(function() {
  var app = angular.module('share', []);

  app.controller('ShareCtrl', function ($scope) {
      $scope.todos = ['SharedItem 1', 'SharedItem 2', 'SharedItem 3'];

      $scope.addTodo = function () {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      };

      $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
      };
  });
})();

