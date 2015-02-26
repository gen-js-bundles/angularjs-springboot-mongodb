'use strict';

angular.module('<%=project.name%>App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


