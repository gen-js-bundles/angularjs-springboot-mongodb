'use strict';

angular.module('<%=project.name.a()%>App')
    .factory('Password', function ($resource) {
        return $resource('api/account/change_password', {}, {
        });
    });
