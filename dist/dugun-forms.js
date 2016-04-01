/**
 * @ngdoc overview
 * @memberof dugun.forms
 * @description
 * Form elements from directives
 */
angular.module('dugun.forms', [
    'ngSanitize',
    'ui.mask',
    'daterangepicker',
    'angularMoment',
]);

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
        templateUrl: 'form-elements/select2/select2.html'
    };
}

angular.module('dugun.forms').directive('dgFormSelect2', DgFormSelect2);

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
        templateUrl: 'form-elements/select2-multiple/select2-multiple.html'
    };
}

angular.module('dugun.forms')
    .directive('dgFormSelect2Multiple', DgFormSelect2Multiple);

/**
 * @ngdoc directive
 * @name dugun.forms:dgFormRequiredAsterisk
 * @restrict 'E'
 * @scope
 **/
function DgFormRequiredAsterisk() {
    return {
        restrict: 'ACE',
        templateUrl: 'form-elements/required-asterisk/required-asterisk.html',
        replace: true
    };
}

angular.module('dugun.forms').directive('dgFormRequiredAsterisk', DgFormRequiredAsterisk);

/**
 * @ngdoc directive
 * @name dugun.forms:dgFormRadio
 * @restrict 'ACE'
 * @scope
 **/
function DgFormRadio() {
    return {
        restrict: 'ACE',
        scope: {
            model: '=ngModel',
            options: '=',
            required: '=ngRequired',
            name: '@dgName'
        },
        templateUrl: 'form-elements/radio/template.html'
    };
}

angular.module('dugun.forms').directive('dgFormRadio', DgFormRadio);

/**
 * @ngdoc directive
 * @name dugun.forms:DgFormDateRange
 * @restrict 'E'
 * @scope
 **/
function DgFormDateRange(moment) {
    return {
        restrict: 'AEC',
        scope: {
            modelStart: '=ngModelStart',
            modelEnd: '=ngModelEnd',
            required: '=',
            min: '=',
            max: '=',
            options: '=',
            placeholder: '@',
            clearable: '='
        },
        templateUrl: 'form-elements/date-range/date-range.html',
        link: function(scope) {
            function datesChanged(newValue) {
                if(!newValue) return;
                if(newValue.startDate) {
                    scope.modelStart = newValue.startDate.format('YYYY-MM-DD');
                } else {
                    delete scope.modelStart;
                }
                if(newValue.endDate) {
                    scope.modelEnd = newValue.endDate.format('YYYY-MM-DD');
                } else {
                    delete scope.modelEnd;
                }
            }

            // Initialize scope.dates with values from model.
            function init() {
                if(!scope.dates) {
                    scope.dates = {};
                }

                if(scope.modelStart && !scope.dates.startDate) {
                    scope.dates.startDate = moment(scope.modelStart);
                }

                if(scope.modelEnd && !scope.dates.endDate) {
                    scope.dates.endDate = moment(scope.modelEnd);
                }
            }

            init();
            scope.$watch('dates', datesChanged, true);
        }
    };
}

DgFormDateRange.$inject = [
    'moment',
];

angular.module('dugun.forms').directive('dgFormDateRange', DgFormDateRange);

/**
 * @ngdoc directive
 * @name dugun.forms:dgFormCheckboxMultiple
 * @restrict 'ACE'
 * @scope
 **/
function DgFormCheckboxMultiple() {
    return {
        restrict: 'ACE',
        scope: {
            model: '=ngModel',
            options: '=',
            name: '@dgName',
            html: '&'
        },
        templateUrl: 'form-elements/checkbox/multiple.html',
        link: function(scope) {
            function indexById(array, id) {
                for(var i in array) {
                    if(array[i].id === id) {
                        return i;
                    }
                }

                return -1;
            }

            function setModel() {
                var array = [], i;
                for(i in scope.options) {
                    if(scope.options[i].selected) {
                        array.push(scope.options[i].id);
                    }
                }

                scope.model = array;
            }

            function setOptions() {
                var index, i;
                for(i in scope.model) {
                    index = indexById(scope.options, scope.model[i]);
                    if(index > -1) {
                        scope.options[index].selected = true;
                    }
                }
            }

            if(!angular.isArray(scope.model)) {
                scope.model = [];
            }

            scope.$watch('options', setModel, true);
            scope.$watch('model', setOptions, true);
        }
    };
}

angular.module('dugun.forms').directive('dgFormCheckboxMultiple', DgFormCheckboxMultiple);

/**
 * @ngdoc directive
 * @name dugun.forms:dgFormCheckbox
 * @restrict 'ACE'
 * @scope
 **/
function DgFormCheckbox() {
    return {
        restrict: 'ACE',
        scope: {
            model: '=ngModel',
            required: '=ngRequired',
            trueValue: '=',
            falseValue: '=',
            name: '@dgName',
            label: '@'
        },
        templateUrl: 'form-elements/checkbox/template.html'
    };
}

angular.module('dugun.forms').directive('dgFormCheckbox', DgFormCheckbox);

/**
 * @ngdoc directive
 * @name dugun.forms:dgFormBoolean
 * @restrict 'ACE'
 * @scope
 **/
function DgFormBoolean() {
    return {
        restrict: 'ACE',
        scope: {
            model: '=ngModel',
            allowClear: '@',
            labelTrue: '@',
            labelFalse: '@'
        },
        templateUrl: 'form-elements/boolean/boolean.html'
    };
}

angular.module('dugun.forms')
    .directive('dgFormBoolean', DgFormBoolean);

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
            required: '=ngRequired',
            placeholder: '@'
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
