/**
 * @ngdoc overview
 * @memberof dugun.forms.helpers.uiSelectRequired
 * @description
 * description
 */
angular.module('dugun.forms.helpers.uiSelectRequired', []);

function UISelectRequiredDirective() {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            var selectElement = $('<select class="hidden-select"></select>')
                .prop('required', true);
            if(attrs.form) {
                selectElement.attr('form', attrs.form);
            }

            scope.$watch(function () {
                return ngModel.$modelValue;
            }, function (newValue) {
                if(typeof newValue !== 'undefined' && newValue !== null) {
                    selectElement.append('<option value="'+ newValue +'"></option>')
                        .find('option:last-child')
                        .prop('selected', true);
                } else {
                    selectElement.find('option').remove();
                }
            });

            // Remove the hidden select if required is false
            scope.$watch(function() {
                return attrs.uiSelectRequired;
            }, function(newValue) {
                if(newValue === 'true') {
                    $(element).after(selectElement);
                } else {
                    $(selectElement).remove();
                }
            });
        }
    };
}

angular.module('dugun.forms.helpers.uiSelectRequired')
    .directive('uiSelectRequired', UISelectRequiredDirective);

/**
 * @ngdoc overview
 * @memberof dugun.forms.helpers.propsFilter
 * @description
 * Property filter
 */
angular.module('dugun.forms.helpers.propsFilter', []);

angular.module('dugun.forms.helpers.propsFilter')
    .filter('props', function() {
        return function(items, props) {
            var out = [];

            if(angular.isArray(items)) {
                items.forEach(function(item) {
                    var itemMatches = false;

                    var keys = Object.keys(props);
                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var text = props[prop].toLowerCase();
                        if(typeof item === 'undefined' || typeof item[prop] === 'undefined') {
                            itemMatches = false;
                            break;
                        }
                        if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                            itemMatches = true;
                            break;
                        }
                    }

                    if (itemMatches) {
                        out.push(item);
                    }
                });
            } else {
                // Let the output be the input untouched
                out = items;
            }

            return out;
        };
    });

/**
 * @ngdoc overview
 * @memberof dugun.forms.helpers.numberOnly
 * @description
 * description
 */
angular.module('dugun.forms.helpers.numberOnly', []);

// Source from: http://stackoverflow.com/questions/19036443/angularjs-how-to-allow-only-a-number-digits-and-decimal-point-to-be-typed-in
// Author: Nishchit Dhanani
// Written on: 2013-11-14
function NumberOnlyDirective($window) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {
            if(attrs.numberOnly === 'true') {
                modelCtrl.$formatters.push(function (inputValue) {
                    return $window.parseFloat(inputValue);
                });
            }
        }
    };
}

NumberOnlyDirective.$inject = [
    '$window',
];

angular.module('dugun.forms.helpers.numberOnly')
    .directive('numberOnly', NumberOnlyDirective);

/**
 * @ngdoc overview
 * @memberof dugun.forms
 * @description
 * Form elements from directives
 */
angular.module('dugun.forms', [
    'ngSanitize',
    'ui.mask',
    'ui.bootstrap.datepicker',
    'ui.select',
    'daterangepicker',
    'angularMoment',
    'dugun.forms.helpers',
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
        templateUrl: 'form-elements/textarea/textarea.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;
        }
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
            ngModelOptions: '=',
            required: '=ngRequired',
            maxlength: '@',
            dgId: '@',
            placeholder: '@',
            type: '@',
            mask: '@',
            disableLength: '&',
            numberOnly: '&'
        },
        templateUrl: 'form-elements/text-input/text-input.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;
        }
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
            searchEnabled: '&',
            ngDisabled: '='
        },
        templateUrl: 'form-elements/select2/single.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;
        }
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
        transclude: true,
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
        link: function(scope, element, attrs) {
            scope.attrs = attrs;

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
            scope.$watch('modelStart', init);
            scope.$watch('modelEnd', init);
        }
    };
}

DgFormDateRange.$inject = [
    'moment',
];

angular.module('dugun.forms').directive('dgFormDateRange', DgFormDateRange);

/**
 * @ngdoc directive
 * @name dugun.forms:DgFormDate
 * @restrict 'E'
 * @scope
 **/
function DgFormDate(moment) {
    return {
        restrict: 'AEC',
        scope: {
            model: '=ngModel',
            required: '=',
            placeholder: '@',
            id: '@dgId',
            ngChange: '&'
        },
        templateUrl: 'form-elements/date/date.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;

            function dateChanged(newValue) {
                if(!newValue) return;
                if(newValue) {
                    scope.model = moment(newValue).format('YYYY-MM-DD');
                } else {
                    delete scope.model;
                }
            }

            // Initialize scope.dates with values from model.
            function init() {
                if(!scope.date) {
                    scope.date = null;
                }

                if(scope.model && !scope.date) {
                    scope.date = new Date(scope.model);
                }

                if(angular.isFunction(scope.ngChange)) {
                    scope.ngChange({ model: scope.date });
                }
            }

            init();
            scope.$watch('date', dateChanged);
            scope.$watch('model', init);
        }
    };
}

DgFormDate.$inject = [
    'moment',
];

angular.module('dugun.forms').directive('dgFormDate', DgFormDate);

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

/**
 * @ngdoc directive
 * @name dugun.forms:dgFormCheckboxMultiple
 * @restrict 'ACE'
 * @scope
 **/
function DgFormCheckboxMultiple() {
    return {
        restrict: 'ACE',
        transclude: true,
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
        transclude: true,
        scope: {
            model: '=ngModel',
            required: '=ngRequired',
            trueValue: '=',
            falseValue: '=',
            name: '@dgName',
            label: '@',
            labelTemplate: '@'
        },
        templateUrl: 'form-elements/checkbox/template.html'
    };
}

angular.module('dugun.forms').directive('dgFormCheckbox', DgFormCheckbox);

/**
 * @ngdoc overview
 * @memberof dugun.forms.helpers
 * @description
 * Helpers
 */
angular.module('dugun.forms.helpers', [
    'dugun.forms.helpers.propsFilter',
    'dugun.forms.helpers.uiSelectRequired',
    'dugun.forms.helpers.numberOnly',
]);
