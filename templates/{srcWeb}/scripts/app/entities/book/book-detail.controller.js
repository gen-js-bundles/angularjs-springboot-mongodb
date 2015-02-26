'use strict';

angular.module('<%=project.name.a()%>App')
    .controller('BookDetailController', function ($scope, $stateParams, Book) {
        $scope.book = {};
        $scope.load = function (id) {
            Book.get({id: id}, function(result) {
              $scope.book = result;
            });
        };
        $scope.load($stateParams.id);
    });
