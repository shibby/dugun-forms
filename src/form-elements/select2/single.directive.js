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
            allowClear: '@',
            required: '=ngRequired',
            placeholder: '@',
            searchEnabled: '&'
        },
        templateUrl: 'form-elements/select2/single.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;
        }
    };
}

angular.module('dugun.forms').directive('dgFormSelect2', DgFormSelect2);
