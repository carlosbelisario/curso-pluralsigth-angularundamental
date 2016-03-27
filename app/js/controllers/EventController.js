'use strict';

eventsApp.controller('EventController', 
    function($scope, $log, $anchorScroll, $routeParams, eventData) {
        $scope.snippet = '<span style="color:red;">hi there</span>';
        $scope.boolValue = true;
        
        $scope.sortOrder = 'name';
        
        eventData.getEvent($routeParams.id)
            .$promise.then(function(event) {
                $scope.event = event;
                $log.info(event);
            })
            .catch(function(response) {
                $log.warn(response);
            })            
        ;
        
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };
        
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
        
        $scope.scrollToSession = function() {
            $anchorScroll();
        };
    }
);
