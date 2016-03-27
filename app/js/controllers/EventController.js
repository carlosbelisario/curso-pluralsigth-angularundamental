'use strict';

eventsApp.controller('EventController', 
    function($scope, $log, eventData) {
        $scope.snippet = '<span style="color:red;">hi there</span>';
        $scope.boolValue = true;
        
        $scope.sortOrder = 'name';
        
        $scope.event = eventData.getEvent();
        
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };
        
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);
