'use strict';

describe('eventThumbnail', function() {

    var el;
    /**
     * module is a angular function 
     * setUp the test, initialize the module
     */
    beforeEach(module('eventsApp'));
    
    beforeEach(module('/templates/directives/eventThumbnail.html'));
    
    beforeEach(inject(function($compile, $rootScope){
        var scope = $rootScope.$new();                
        scope.event = {
            id: 1,
            name: 'Angular expo', 
            date: '27/03/2016', 
            time: '10:30:00', 
            location: {
                address: '123 fake street',
                city: 'NY',
                province: 'NY'
            }
        };
        el = angular.element('<event-thumbnail event="event" />');
        $compile(el)(scope);
        scope.$digest();
    }));
    
    it('should bind the data', function() {
        expect(el.text).toContain('Angular expo');  
    });
    
    
});
