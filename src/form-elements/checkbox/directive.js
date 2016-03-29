/**
 * @ngdoc directive
 * @name dugun.forms:dgFormCheckbox
 * @restrict 'ACE'
 * @scope
 **/
function DgFormCheckbox() {
    return {
        restrict: 'ACE',
        scope: {
            model: '=ngModel',
            required: '=ngRequired',
            trueValue: '=',
            falseValue: '=',
            name: '@dgName',
            label: '@'
        },
        templateUrl: 'form-elements/checkbox/template.html'
    };
}

angular.module('dugun.forms').directive('dgFormCheckbox', DgFormCheckbox);
