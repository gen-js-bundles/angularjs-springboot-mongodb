'use strict';

angular.module('<%=project.name.a()%>App')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
