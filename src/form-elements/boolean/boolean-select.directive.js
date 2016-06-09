/**
 * @ngdoc directive
 * @name dugun.forms:dgFormBooleanSelect
 * @restrict 'ACE'
 * @scope
 **/
function DgFormBooleanSelect() {
    return {
        restrict: 'ACE',
        scope: {
            model: '=ngModel',
            allowClear: '@',
            labelTrue: '@',
            labelFalse: '@',
            valueTrue: '&',
            valueFalse: '&',
            required: '=ngRequired'
        },
        templateUrl: 'form-elements/boolean/boolean-select.html',
        link: function(scope) {
            var options = [];

            options.push({
                id: typeof scope.valueTrue() === 'undefined' ? true : scope.valueTrue(),
                name: scope.labelTrue
            });
            options.push({
                id: typeof scope.valueFalse() === 'undefined' ? false : scope.valueFalse(),
                name: scope.labelFalse
            });

            scope.options = options;
        }
    };
}

angular.module('dugun.forms')
    .directive('dgFormBooleanSelect', DgFormBooleanSelect);
