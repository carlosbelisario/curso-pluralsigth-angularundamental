'use strict';

eventsApp.directive('upvote', function($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/upvote.html',
        scope: {
            upVote: '&',
            downVote: '&',
            count: '='
        }
    }
});
