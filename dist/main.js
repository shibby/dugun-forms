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
    'ui.bootstrap.buttons',
    'ui.select',
    'daterangepicker',
    'angularMoment',
    'ui.timepicker',
    'textAngular', // dgFormHtml
    'dugun.forms.helpers',
]);

/**
 * @ngdoc directive
 * @name dugun.forms:DgFormTime
 * @restrict 'ACE'
 * @scope
 **/
function DgFormTime(moment) {
    return {
        restrict: 'AEC',
        scope: {
            model: '=ngModel',
            required: '=ngRequired',
            placeholder: '@',
            id: '@dgId'
        },
        templateUrl: 'form-elements/time/time.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;

            function dateChanged(newValue) {
                if(!newValue) return;
                if(newValue) {
                    scope.model = moment(newValue).format('HH:mm');
                } else {
                    delete scope.model;
                }
            }

            // Initialize scope.dates with values from model.
            function init() {
                if(!scope.time) {
                    scope.time = undefined;
                }

                if(scope.model && !scope.time) {
                    var time = moment(),
                        modelSplit = scope.model.split(':');

                    time = time.hour(modelSplit[0]).minute(modelSplit[1]);
                    scope.time = time;
                }
            }

            init();
            scope.$watch('time', dateChanged);
            scope.$watch('model', init);
        }
    };
}

DgFormTime.$inject = [
    'moment',
];

angular.module('dugun.forms').directive('dgFormTime', DgFormTime);

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
        compile: function(element, attrs) {
            return {
                pre: function preLink(scope, element, attrs) {
                    // set the defaults
                    if(!attrs.idKey) {
                        attrs.idKey = 'id';
                    }
                    if(!attrs.valueKey) {
                        attrs.valueKey = 'name';
                    }
                    scope.attrs = attrs;
                }
            };
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
            ngDisabled: '=',
            maxlength: '@',
            readonly: '=',
            type: '@',
            mask: '@',
            disableLength: '&',
            numberOnly: '&',
            addonRight: '@'
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
            required: '=ngRequired',
            options: '=',
            clearable: '='
        },
        templateUrl: 'form-elements/date-range/date-range.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;
            scope.dates = {startDate: null, endDate: null};

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
                if(
                    (scope.modelStart && !scope.dates.startDate) ||
                    (scope.modelEnd && !scope.dates.endDate)
                ) {
                    scope.dates = {
                        startDate: moment(scope.modelStart),
                        endDate: moment(scope.modelEnd),
                    };
                }

                if(!scope.modelStart || !scope.modelEnd) {
                    scope.dates = {startDate: null, endDate: null};
                }
            }

            init();
            scope.$watch('modelStart', init);
            scope.$watch('modelEnd', init);
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
            taToolbar: '@',
            readonly: '=',
        },
        templateUrl: 'form-elements/html/template.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;
        }
    };
}

angular.module('dugun.forms').directive('dgFormHtml', DgFormHtml);

/**
 * @ngdoc directive
 * @name dugun.forms:DgFormDateTime
 * @restrict 'ACE'
 * @scope
 **/
function DgFormDateTime(moment) {
    return {
        restrict: 'ACE',
        scope: {
            model: '=ngModel',
            required: '=ngRequired',
            placeholder: '@',
            id: '@dgId'
        },
        templateUrl: 'form-elements/datetime/datetime.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;

            function dateChanged(newValue) {
                if(!newValue) return;
                if(newValue) {
                    var newDate = moment(newValue);
                    if(scope.time) {
                        var timeSplit = scope.time.split(':');
                        newDate = newDate.hour(timeSplit[0]).minute(timeSplit[1]);
                    }
                    scope.model = newDate.format('YYYY-MM-DD HH:mm:ss');
                } else {
                    delete scope.model;
                }
            }

            function timeChanged(newValue) {
                if(!newValue) return;
                if(newValue) {
                    var date = moment(scope.model);
                    var timeSplit = newValue.split(':');
                    date = date.hour(timeSplit[0]).minute(timeSplit[1]).second('00');
                    scope.model = moment(date).format('YYYY-MM-DD HH:mm:ss');
                } else {
                    delete scope.model;
                }
            }

            function init() {
                if(!scope.date) {
                    scope.date = null;
                }

                if(!scope.time) {
                    scope.time = null;
                }

                if(scope.model && !scope.date) {
                    scope.date = new Date(scope.model);
                }

                if(scope.model && !scope.time) {
                    var currentDateTime = moment(scope.model);
                    var time = currentDateTime.hour() + ':' + currentDateTime.minute();
                    scope.time = time;
                }
            }

            init();
            scope.$watch('date', dateChanged);
            scope.$watch('time', timeChanged);
            scope.$watch('model', init);
        }
    };
}

DgFormDateTime.$inject = [
    'moment',
];

angular.module('dugun.forms').directive('dgFormDateTime', DgFormDateTime);

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
            format: '@',
            required: '=ngRequired',
            placeholder: '@',
            id: '@dgId',
            ngChange: '&',
            dateOptions: '@'
        },
        templateUrl: 'form-elements/date/date.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;
            if (!scope.dateOptions) {
                scope.dateOptions = {}
            }

            if(!scope.format){
                scope.format = 'YYYY-MM-DD';
            }

            function dateChanged(newValue) {
                if(!newValue) return;
                if(newValue) {
                    scope.model = moment(newValue).format(scope.format);
                } else {
                    delete scope.model;
                }
            }

            // Initialize scope.dates with values from model.
            function init() {
                if(!scope.date) {
                    scope.date = null;
                }

                if(angular.isDate(scope.model)) {
                    scope.model = moment(scope.model).format('YYYY-MM-DD');
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
            required: '=ngRequired'
        },
        templateUrl: 'form-elements/boolean/boolean-select.html',
        link: function(scope, element, attrs) {
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
            scope.attrs = attrs;
        }
    };
}

angular.module('dugun.forms')
    .directive('dgFormBooleanSelect', DgFormBooleanSelect);

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
        templateUrl: 'form-elements/checkbox/single.html'
    };
}

angular.module('dugun.forms').directive('dgFormCheckbox', DgFormCheckbox);

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
 * @ngdoc overview
 * @memberof dugun.forms.helpers.propsFilter
 * @description
 * Property filter
 */
angular.module('dugun.forms.helpers.propsFilter', []);

angular.module('dugun.forms.helpers.propsFilter')
    .filter('props', function() {
        return function(items, id, value) {
            var out = [],
                props = {};

            props[id] = value;

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
 * @memberof dugun.forms.helpers
 * @description
 * Helpers
 */
angular.module('dugun.forms.helpers', [
    'dugun.forms.helpers.propsFilter',
    'dugun.forms.helpers.uiSelectRequired',
    'dugun.forms.helpers.numberOnly',
]);

angular.module('ui.timepicker').value('uiTimepickerConfig',{
    asMoment: true,
    timeFormat: 'H:i'
});

function DugunFormsUISelectConfig(uiSelectConfig) {
    uiSelectConfig.theme = 'select2';
}

DugunFormsUISelectConfig.$inject = [
    'uiSelectConfig',
];

angular.module('dugun.forms').config(DugunFormsUISelectConfig);

angular.module('dugun.forms').run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/checkbox/multiple.html',
    '<div class="checkbox" ng-repeat="option in options"><label><input type="checkbox" ng-model="option.selected"> <span ng-if="!html()" class="text" ng-bind="option.name"></span> <span ng-if="html()" class="text" ng-bind-html="option.name"></span></label></div>');
}]);

angular.module('dugun.forms').run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/checkbox/single.html',
    '<div class="checkbox"><label><input type="checkbox" ng-model="model" ng-true-value="{{ trueValue }}" ng-false-value="{{ falseValue }}" name="{{ name }}" ng-required="{{ required ? true : false }}"> <span ng-if="!labelTemplate">{{ label }}</span> <span ng-if="labelTemplate" ng-include="labelTemplate"></span></label></div>');
}]);

angular.module('dugun.forms').run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/boolean/boolean-select.html',
    '<dg-form-select2 ng-model="model" options="options" placeholder="{{ attrs.placeholder }}" allow-clear="{{ allowClear }}" ng-required="required ? true : false" search-enabled="false"></dg-form-select2>');
}]);

angular.module('dugun.forms').run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/boolean/boolean.html',
    '<label class="btn btn-default" ng-model="model" uncheckable="{{ allowClear }}" uib-btn-radio="true" ng-bind="labelTrue"></label><label class="btn btn-default" ng-model="model" uncheckable="{{ allowClear }}" uib-btn-radio="false" ng-bind="labelFalse"></label>');
}]);

angular.module('dugun.forms').run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/date/date.html',
    '<input type="text" class="form-control" ng-model="date" ng-attr-id="{{ id || \'\' }}" uib-datepicker-popup ng-click="datepickerPopupOpen = true" is-open="datepickerPopupOpen" ng-required="required" ng-attr-form="{{ attrs.form ? attrs.form : undefined }}" datepicker-options="dateOptions" placeholder="{{ placeholder || \'\' }}">');
}]);

angular.module('dugun.forms').run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/datetime/datetime.html',
    '<div class="row"><dg-form-date class="col-xs-12 col-md-6" ng-model="date" ng-required="required"></dg-form-date><dg-form-time class="col-xs-12 col-md-6" ng-model="time" ng-required="required"></dg-form-time></div>');
}]);

angular.module('dugun.forms').run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/html/template.html',
    '<text-angular ng-model="model" ta-toolbar="{{ taToolbar }}" ng-required="required" ng-attr-maxlength="{{ attrs.maxlength || undefined }}" ng-readonly="readonly" ng-disabled="ngDisabled"></text-angular>');
}]);

angular.module('dugun.forms').run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/radio/template.html',
    '<div class="radio" ng-repeat="option in options"><label><input type="radio" ng-model="$parent.model" ng-value="option.id" ng-required="{{ required ? true : false }}" name="{{ name }}"> <span ng-bind="option.name"></span></label></div>');
}]);

angular.module('dugun.forms').run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/required-asterisk/required-asterisk.html',
    '<i class="fa fa-asterisk red"></i>');
}]);

angular.module('dugun.forms').run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/date-range/date-range.html',
    '<input date-range-picker class="form-control full-width date-picker" type="text" ng-model="dates" options="options" clearable="clearable" ng-required="required" ng-attr-form="{{ attrs.form ? attrs.form : undefined }}" ng-attr-name="{{ attrs.dgName ? attrs.dgName : undefined }}" ng-attr-placeholder="{{ attrs.placeholder || undefined }}" ng-attr-id="{{ attrs.dgId || undefined }}">');
}]);

angular.module('dugun.forms').run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/text-input/text-input.html',
    '<input type="{{ type || \'text\' }}" class="form-control full-width" ng-if="(!maxlength || disableLength()) && !addonRight" ng-model="$parent.model" ng-required="required" ui-mask="{{ mask || \'\' }}" ng-attr-min="{{ attrs.min || undefined }}" ng-attr-max="{{ attrs.max || undefined }}" ng-attr-step="{{ attrs.step || undefined }}" ng-attr-form="{{ attrs.form || undefined }}" ng-attr-name="{{ attrs.dgName || undefined }}" ng-attr-placeholder="{{ attrs.placeholder || undefined }}" ng-attr-id="{{ attrs.dgId || undefined }}" ng-attr-autocomplete="{{ attrs.autocomplete || undefined }}" ng-attr-inputmode="{{ attrs.inputmode || undefined }}" ng-attr-list="{{ attrs.list || undefined }}" ng-attr-maxlength="{{ attrs.maxlength || undefined }}" ng-pattern="{{ attrs.pattern || undefined }}" ng-readonly="readonly" ng-attr-size="{{ attrs.size || undefined }}" ng-attr-spellcheck="{{ attrs.spellcheck || undefined }}" ng-attr-tabindex="{{ attrs.tabindex || undefined }}" ng-disabled="ngDisabled" number-only="{{ numberOnly() ? \'true\' : \'\' }}" ng-model-options="ngModelOptions || {}"><div class="input-group" ng-if="(maxlength && !disableLength()) || addonRight"><input type="{{ type || \'text\' }}" class="form-control" ng-model="$parent.model" ng-required="required" ng-attr-min="{{ attrs.min || undefined }}" ng-attr-max="{{ attrs.max || undefined }}" ng-attr-step="{{ attrs.step || undefined }}" ng-attr-form="{{ attrs.form || undefined }}" ng-attr-name="{{ attrs.dgName || undefined }}" ng-attr-placeholder="{{ attrs.placeholder || undefined }}" ng-attr-id="{{ attrs.dgId || undefined }}" ng-attr-autocomplete="{{ attrs.autocomplete || undefined }}" ng-attr-inputmode="{{ attrs.inputmode || undefined }}" ng-attr-list="{{ attrs.list || undefined }}" ng-attr-maxlength="{{ attrs.maxlength || undefined }}" ng-pattern="{{ attrs.pattern || undefined }}" ng-readonly="readonly" ng-attr-size="{{ attrs.size || undefined }}" ng-attr-spellcheck="{{ attrs.spellcheck || undefined }}" ng-attr-tabindex="{{ attrs.tabindex || undefined }}" ng-disabled="ngDisabled" number-only="{{ numberOnly() ? \'true\' : \'\' }}" ng-model-options="ngModelOptions || {}"><div class="input-group-addon" ng-bind="addonRight || (maxlength - model.length)"></div></div>');
}]);

angular.module('dugun.forms').run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/select2/multiple.html',
    '<ui-select class="full-width" ng-model="$parent.model" ui-select-required="{{ required ? true : false }}" search-enabled="searchEnabled()" ng-attr-form="{{ attrs.form || undefined }}" ng-disabled="ngDisabled ? true : false" multiple="multiple"><ui-select-match placeholder="{{ attrs.placeholder }}" allow-clear="{{ allowClear }}"><div ng-bind="$item[valueKey]"></div></ui-select-match><ui-select-choices repeat="item[idKey] as item in options | props:valueKey:$select.search"><p ng-bind-html="item[valueKey] | highlight: $select.search"></p></ui-select-choices></ui-select>');
}]);

angular.module('dugun.forms').run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/select2/single.html',
    '<ui-select class="full-width" ng-model="$parent.model" ui-select-required="{{ required ? true : false }}" search-enabled="searchEnabled()" ng-attr-form="{{ attrs.form || undefined }}" ng-disabled="ngDisabled ? true : false"><ui-select-match placeholder="{{ attrs.placeholder }}" allow-clear="{{ allowClear }}"><p ng-bind="$select.selected[valueKey]"></p></ui-select-match><ui-select-choices repeat="item[idKey] as item in options | props:valueKey:$select.search"><p ng-bind-html="item[valueKey] | highlight: $select.search"></p></ui-select-choices></ui-select>');
}]);

angular.module('dugun.forms').run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/textarea/textarea.html',
    '<textarea class="form-control" ng-model="model" ng-required="required" ng-disabled="ngDisabled" ng-attr-id="{{ dgId || undefined }}" ng-attr-name="{{ dgName || undefined }}" ng-attr-placeholder="{{ placeholder }}" ng-attr-maxlength="{{ attrs.maxlength || undefined }}" ng-attr-rows="{{ attrs.rows || undefined }}" ng-attr-cols="{{ attrs.cols || undefined }}" ng-attr-form="{{ attrs.form ? attrs.form : undefined }}" style="{{ attrs.style || undefined }}"></textarea>');
}]);

angular.module('dugun.forms').run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/time/time.html',
    '<input class="form-control" ui-timepicker ng-model="time" ng-required="required" ng-attr-placeholder="{{ placeholder }}" ng-attr-id="{{ id || undefined }}" ng-attr-name="{{ attrs.dgName || undefined }}">');
}]);
