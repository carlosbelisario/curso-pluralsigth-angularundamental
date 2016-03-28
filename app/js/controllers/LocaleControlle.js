'use strict';

eventsApp.controller('LocaleController', function($scope, $locale) {
    $scope.date = Date.now();        
    $scope.myDateFormat = $locale.DATETIME_FORMATS.fullDate;
});
