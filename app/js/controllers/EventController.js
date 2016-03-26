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
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this session your lear the ins and out of directives'
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: '30 min',
                    level: 'Introductory',
                    abstract: 'In this session will take a closer look at scopes, learn what they do, how the do it ...'
                },
                {
                    name: 'Well behaved controller',
                    creatorName: 'Jane Doe',
                    duration: '2 hr',
                    level: 'Intermediate',
                    abstract: 'Controllers are the begin of everything in angular'
                }                
            ]
        };
    }
);
