'use strict';

describe('EventListController', function() {
    /**
     *
     * angular controller 
     */
    var $controllerConstructor,
        scope,
        mockEventData
    ;

    /**
     * module is a angular function 
     * setUp the test, initialize the module
     */
    beforeEach(module('eventsApp'));
    
    /**
     * inject is a angular function
     * inject the dependencies for the the controller to test 
     */
    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockEventData = sinon.stub({
            getAllEvents: function(){
            }
        });
    }));
    
    
    it('should set the scope to result of eventData.getAllEvents', function() {
        var mockEvents = {};
        mockEventData.getAllEvents.returns(mockEvents);
        $controllerConstructor('EventListController', {'$scope': scope, 'eventData': mockEventData});
        expect(scope.events).toBe(mockEvents);
    });
});
