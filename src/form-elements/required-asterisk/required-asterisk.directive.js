/**
 * @ngdoc directive
 * @name dugun.forms:dgFormRequiredAsterisk
 * @restrict 'E'
 * @scope
 **/
function DgFormRequiredAsterisk() {
    return {
        restrict: 'ACE',
        templateUrl: 'form-elements/required-asterisk/required-asterisk.html',
        replace: true
    };
}

angular.module('dugun.forms').directive('dgFormRequiredAsterisk', DgFormRequiredAsterisk);
