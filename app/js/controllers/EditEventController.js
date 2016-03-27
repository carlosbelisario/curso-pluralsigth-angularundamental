'use strict';

eventsApp.controller('EditEventController', 
    function($scope, $log, eventData) {
        $scope.saveEvent = function(event) {
            eventData.save(event)
                .$promise.then(function(response) {
                    $log.info('success ' + response);
                })
                .catch(function(err) {
                    $log.warn('failure ' + err);
                })
            ;
        }
        
        $scope.cancelEdit = function() {
            window.location = "/EventDetail.html";
        }        
    }
);
