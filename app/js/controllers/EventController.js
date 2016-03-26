'use strict';

eventsApp.controller('EventController', 
    function($scope) {
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '01/01/2016',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'                
            },
            imageUrl: '/img/angularjs-logo.png'
        };
    }
);
