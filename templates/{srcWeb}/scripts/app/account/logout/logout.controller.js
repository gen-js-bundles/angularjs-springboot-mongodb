'use strict';

angular.module('<%=project.name%>App')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
