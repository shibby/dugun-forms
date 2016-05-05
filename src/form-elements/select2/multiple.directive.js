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
            placeholder: '@'
        },
        templateUrl: 'form-elements/select2/multiple.html'
    };
}

angular.module('dugun.forms')
    .directive('dgFormSelect2Multiple', DgFormSelect2Multiple);
