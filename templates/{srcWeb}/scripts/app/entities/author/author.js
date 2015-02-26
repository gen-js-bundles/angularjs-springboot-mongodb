'use strict';

angular.module('<%=project.name%>App')
    .config(function ($stateProvider) {
        $stateProvider
            .state('author', {
                parent: 'entity',
                url: '/author',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: '<%=project.name%>App.author.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/author/authors.html',
                        controller: 'AuthorController as listCtrl'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('author');
                        return $translate.refresh();
                    }]
                }
            })
            .state('authorDetail', {
                parent: 'entity',
                url: '/author/:id',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: '<%=project.name%>App.author.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/author/author-detail.html',
                        controller: 'AuthorDetailController as detailCtrl'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('author');
                        return $translate.refresh();
                    }]
                }
            });
    });
