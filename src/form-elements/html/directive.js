/**
 * @ngdoc directive
 * @name dgFormHtml
 * @restrict 'E'
 * @scope
 **/
function DgFormHtml() {
    return {
        restrict: 'E',
        scope: {
            model: '=ngModel',
            required: '=ngRequired',
            ngDisabled: '=',
            maxlength: '@',
            taToolbar: '=',
            readonly: '=',
        },
        templateUrl: 'form-elements/html/template.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;
        }
    };
}

angular.module('dugun.forms').directive('dgFormHtml', DgFormHtml);
