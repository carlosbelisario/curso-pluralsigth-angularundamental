'use strict';

eventsApp.controller('CompileSampleController', function($scope, $compile, $parse, $log) {
    var fn = $parse('1 +2');
    $log.info(fn());
    
    var getter = $parse('event.name'),
        setter = getter.assign,
        context = {event: {name: 'Angular Bot Camp'}},
        context2 = {event: {name: 'Code Cap'}}        
    ;
    
    $log.info(getter(context));
    $log.info(getter(context2));

    setter(context2, 'Other value');

    $log.info(context2.event.name)
    $scope.appendDivToElement = function(markup) {
        return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
    };
});

