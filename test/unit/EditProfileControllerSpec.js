'use strict';

describe('EditProfileController', function() {
    /**
     *
     * angular controller 
     */
    var $controllerConstructor,
        scope,
        mockGravatarUrlBuilder
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
        mockGravatarUrlBuilder = sinon.stub({
            buildGravatarUrl: function(){
            }
        });
    }));
    
    
    it('build the gravatar with the given email', function() {
        var  email = 'test@test.com';

        $controllerConstructor('EditProfileController', {'$scope': scope, 'gravatarUrlBuilder': mockGravatarUrlBuilder});        
        scope.getGravatarUrl(email);
        expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
    });
});
