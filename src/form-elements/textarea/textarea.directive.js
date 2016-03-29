/**
 * @ngdoc directive
 * @name dgFormTextarea
 * @restrict 'E'
 * @scope
 **/
function DgFormTextarea() {
    return {
        restrict: 'E',
        scope: {
            model: '=ngModel',
            required: '=ngRequired',
            maxlength: '@',
            dgId: '@',
            rows: '@',
            style: "@"
        },
        templateUrl: 'form-elements/textarea/textarea.html'
    };
}

angular.module('dugun.forms').directive('dgFormTextarea', DgFormTextarea);
