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
            required: '=ngRequired',
            maxlength: '@',
            dgId: '@',
            placeholder: '@',
            type: '@',
            mask: '@',
            disableLength: '&'
        },
        templateUrl: 'form-elements/text-input/text-input.html'
    };
}

angular.module('dugun.forms').directive('dgFormText', DgFormText);
