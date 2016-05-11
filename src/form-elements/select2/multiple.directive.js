/**
 * @ngdoc directive
 * @name dugun.forms:dgFormSelect2Multiple
 * @restrict 'E'
 * @scope
 **/
function DgFormSelect2Multiple() {
    return {
        restrict: 'E',
        scope: {
            model: '=ngModel',
            options: '=',
            allowClear: '@',
            required: '=ngRequired',
            placeholder: '@',
            searchEnabled: '&'
        },
        templateUrl: 'form-elements/select2/multiple.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;
        }
    };
}

angular.module('dugun.forms')
    .directive('dgFormSelect2Multiple', DgFormSelect2Multiple);
