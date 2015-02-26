'use strict';

angular.module('<%=project.name.a()%>App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


