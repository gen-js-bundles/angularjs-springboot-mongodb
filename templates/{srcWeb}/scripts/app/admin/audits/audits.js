'use strict';

angular.module('<%=project.name.a()%>App')
    .config(function ($stateProvider) {
        $stateProvider
            .state('audits', {
                parent: 'admin',
                url: '/audits',
                data: {
                    roles: ['ROLE_ADMIN'],
                    pageTitle: 'audits.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/admin/audits/audits.html',
                        controller: 'AuditsController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('audits');
                        return $translate.refresh();
                    }]
                }
            });
    });
