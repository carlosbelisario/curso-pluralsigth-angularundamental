'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent', {
            templateUrl: 'templates/event/new.html',
            controller: 'EditEventController'
        });
        $routeProvider.when('/events', {
            templateUrl: 'templates/event/list.html',
            controller: 'EventListController'
        });
        $routeProvider.when('/events/:id', {
            templateUrl: 'templates/event/detail.html',
            controller: 'EventController'
        });
        $routeProvider.when('/sampleDirective', {
            templateUrl: 'templates/samples/sampleDirective.html'
        });
        $routeProvider.otherwise({redirectTo: '/events'});
        $locationProvider.html5Mode(true);
        
    })
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory('myCache', {capacity: 3});
    })
;
