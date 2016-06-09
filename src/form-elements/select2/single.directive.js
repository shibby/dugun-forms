/**
 * @ngdoc directive
 * @name dugun.forms:dgFormSelect2
 * @restrict 'E'
 * @scope
 **/
function DgFormSelect2() {
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
        templateUrl: 'form-elements/select2/single.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;

            if(!scope.idKey) {
                scope.idKey = 'id';
            }

            if(!scope.valueKey) {
                scope.idKey = 'name';
            }
        }
    };
}

angular.module('dugun.forms').directive('dgFormSelect2', DgFormSelect2);
