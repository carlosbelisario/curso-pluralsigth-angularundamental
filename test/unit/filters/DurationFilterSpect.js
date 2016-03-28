'use strict';

describe('durations', function() {
    /**
     * module is a angular function 
     * setUp the test, initialize the module
     */
    beforeEach(module('eventsApp'));
    
    /**
     * test
     */
    it('should return "Half hour" when given 1',
        inject(function(durationsFilter) {
            expect(durationsFilter(1)).toEqual("Half hour");
        })
    );    
});
