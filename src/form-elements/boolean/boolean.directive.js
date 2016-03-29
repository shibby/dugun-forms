/**
 * @ngdoc directive
 * @name dugun.forms:dgFormBoolean
 * @restrict 'ACE'
 * @scope
 **/
function DgFormBoolean() {
    return {
        restrict: 'ACE',
        scope: {
            model: '=ngModel',
            allowClear: '@',
            labelTrue: '@',
            labelFalse: '@'
        },
        templateUrl: 'form-elements/boolean/boolean.html'
    };
}

angular.module('dugun.forms')
    .directive('dgFormBoolean', DgFormBoolean);
