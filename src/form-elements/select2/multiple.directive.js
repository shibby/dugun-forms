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
            idKey: '@',
            valueKey: '@',
            allowClear: '@',
            required: '=ngRequired',
            searchEnabled: '&',
            ngDisabled: '='
        },
        templateUrl: 'form-elements/select2/multiple.html',
        compile: function(element, attrs) {
            return {
                pre: function(scope, element, attrs) {
                    // set the defaults
                    if(!attrs.idKey) {
                        attrs.idKey = 'id';
                    }
                    if(!attrs.valueKey) {
                        attrs.valueKey = 'name';
                    }
                    scope.attrs = attrs;
                }
            }
        }
    };
}

angular.module('dugun.forms')
    .directive('dgFormSelect2Multiple', DgFormSelect2Multiple);
