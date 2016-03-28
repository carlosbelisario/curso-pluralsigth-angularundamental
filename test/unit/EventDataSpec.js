'use strict';

describe('EventData', function() {
    /**
     * module is a angular function 
     * setUp the test, initialize the module
     */
    beforeEach(module('eventsApp'));
    
    /**
     * test
     */
    it('should issue a GET request to data/event/11 when getEvent is called and the id is 11',
        inject(function(eventData, $httpBackend) {
            $httpBackend.expectGET('/data/event/11');
            $httpBackend.when('GET', '/data/event/11').respond({});
            eventData.getEvent(11);
            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        })
    );

    /**
     * test
     */ 
    it('should return the correct data when getEvent is called',
        inject(function(eventData, $httpBackend) {            
            $httpBackend.when('GET', '/data/event/11').respond({name: 'My Event'});
            var event = eventData.getEvent(11);
            $httpBackend.flush();
            expect(event.name).toBe('My Event');
        })
    );
    
    /**
     * test
     */ 
    it('should 999 the id when save the event',
        inject(function(eventData, $httpBackend) {            
            $httpBackend.when('POST', '/data/event/999').respond({});
            var event = {name: 'My Event'};
            eventData.save(event);
            $httpBackend.flush();
            expect(event.id).toBe(999);
        })
    );
    
    /**
     * test
     */ 
    it('should return the correct data when event is called',
        inject(function(eventData, $httpBackend) {            
            $httpBackend.when('GET', '/data/event').respond([{name: 'My Event'}]);
            var events = eventData.getAllEvents();
            $httpBackend.flush();
            expect(events.length).toBeGreaterThan(0);
            expect(events[0].name).toBe('My Event');
        })
    );
});
