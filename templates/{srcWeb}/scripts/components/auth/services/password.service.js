'use strict';

angular.module('<%=project.name%>App')
    .factory('Password', function ($resource) {
        return $resource('api/account/change_password', {}, {
        });
    });
