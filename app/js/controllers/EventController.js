'use strict';

eventsApp.controller('EventController', 
    function($scope) {
        $scope.snippet = '<span style="color:red;">hi there</span>';
        $scope.boolValue = true;
        
        $scope.sortOrder = 'name';
        
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
                    duration: 4,
                    level: 'Advanced',
                    abstract: 'In this session your lear the ins and out of directives',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: 1,
                    level: 'Introductory',
                    abstract: 'In this session will take a closer look at scopes, learn what they do, how the do it ...',
                    upVoteCount: 0
                },
                {
                    name: 'Well behaved controller',
                    creatorName: 'Jane Doe',
                    duration: 3,
                    level: 'Intermediate',
                    abstract: 'Controllers are the begin of everything in angular ...',
                    upVoteCount: 0
                }                
            ]
        };
        
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };
        
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);
