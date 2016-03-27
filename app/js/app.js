'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/newEvent', {
            templateUrl: 'templates/event/NewEvent.html',
            controller: 'EditEventController'
        });
    })
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory('myCache', {capacity: 3});
    })
;
