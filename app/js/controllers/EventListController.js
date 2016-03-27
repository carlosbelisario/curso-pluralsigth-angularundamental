'use strict';

eventsApp.controller('EventListController', function($scope, $log, eventData) {    
    $scope.events = eventData.getAllEvents();
});
