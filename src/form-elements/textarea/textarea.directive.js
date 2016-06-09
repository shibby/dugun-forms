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
            ngDisabled: '='
        },
        templateUrl: 'form-elements/textarea/textarea.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;
        }
    };
}

angular.module('dugun.forms').directive('dgFormTextarea', DgFormTextarea);
