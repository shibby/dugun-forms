/**
 * @ngdoc directive
 * @name dgFormText
 * @restrict 'E'
 * @scope
 **/
function DgFormText() {
    return {
        restrict: 'E',
        scope: {
            model: '=ngModel',
            ngModelOptions: '=',
            required: '=ngRequired',
            maxlength: '@',
            dgId: '@',
            placeholder: '@',
            type: '@',
            mask: '@',
            disableLength: '&',
            numberOnly: '&'
        },
        templateUrl: 'form-elements/text-input/text-input.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;
        }
    };
}

angular.module('dugun.forms').directive('dgFormText', DgFormText);
