eventsApp.factory('eventData', function($http){    
    return {
        getEvent: function(successCallBack) {
            return $http({method: 'GET', url: '/data/event/1'});                            
        }        
    };
});
