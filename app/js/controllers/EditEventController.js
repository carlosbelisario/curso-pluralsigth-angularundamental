'use strict';

eventsApp.controller('EditEventController', 
    function($scope) {
        $scope.saveEvent = function(event) {
            alert('event saved: ' + event.name);
        }
        
        $scope.cancelEdit = function() {
            window.location = "/EventDetail.html";
        }        
    }
);
