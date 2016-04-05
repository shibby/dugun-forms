/**
 * @ngdoc directive
 * @name dugun.forms:dgFormCheckbox
 * @restrict 'ACE'
 * @scope
 **/
function DgFormCheckbox() {
    return {
        restrict: 'ACE',
        transclude: true,
        scope: {
            model: '=ngModel',
            required: '=ngRequired',
            trueValue: '=',
            falseValue: '=',
            name: '@dgName',
            label: '@',
            labelTemplate: '@'
        },
        templateUrl: 'form-elements/checkbox/template.html'
    };
}

angular.module('dugun.forms').directive('dgFormCheckbox', DgFormCheckbox);
