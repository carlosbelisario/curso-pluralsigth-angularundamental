eventsApp.factory('eventData', function($http, $log){    
    return {
        getEvent: function(successCallBack) {
            $http({method: 'GET', url: '/data/event/1'})
                .success(function(data, status, headers, config) {
                    successCallBack(data);
                })
                .error(function(data, status, headers, config) {
                    $log.warn(data, status, headers(), config);
                })
            ;
        }        
    };
});
