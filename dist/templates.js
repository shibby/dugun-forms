(function(module) {
try {
  module = angular.module('dugun.forms');
} catch (e) {
  module = angular.module('dugun.forms', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/boolean/boolean-select.html',
    '<dg-form-select2 ng-model="model" options="options" placeholder="{{ placeholder }}" allow-clear="{{ allowClear }}" ng-required="required ? true : false" search-enabled="false"></dg-form-select2>');
}]);
})();

(function(module) {
try {
  module = angular.module('dugun.forms');
} catch (e) {
  module = angular.module('dugun.forms', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/boolean/boolean.html',
    '<label class="btn btn-default" ng-model="model" uncheckable="{{ allowClear }}" uib-btn-radio="true" ng-bind="labelTrue"></label><label class="btn btn-default" ng-model="model" uncheckable="{{ allowClear }}" uib-btn-radio="false" ng-bind="labelFalse"></label>');
}]);
})();

(function(module) {
try {
  module = angular.module('dugun.forms');
} catch (e) {
  module = angular.module('dugun.forms', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/checkbox/multiple.html',
    '<div class="checkbox" ng-repeat="option in options"><label><input type="checkbox" ng-model="option.selected"> <span ng-if="!html()" class="text" ng-bind="option.name"></span> <span ng-if="html()" class="text" ng-bind-html="option.name"></span></label></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('dugun.forms');
} catch (e) {
  module = angular.module('dugun.forms', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/checkbox/template.html',
    '<div class="checkbox"><label><input type="checkbox" ng-model="model" ng-true-value="{{ trueValue }}" ng-false-value="{{ falseValue }}" name="{{ name }}" ng-required="{{ required ? true : false }}"> <span ng-if="!labelTemplate">{{ label }}</span> <span ng-if="labelTemplate" ng-include="labelTemplate"></span></label></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('dugun.forms');
} catch (e) {
  module = angular.module('dugun.forms', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/date/date.html',
    '<input type="text" class="form-control" ng-model="date" ng-attr-form="{{ form || \'\' }}" ng-attr-id="{{ id || \'\' }}" uib-datepicker-popup ng-click="datepickerPopupOpen = true" is-open="datepickerPopupOpen" ng-required="required" ng-attr-form="{{ attrs.form ? attrs.form : undefined }}">');
}]);
})();

(function(module) {
try {
  module = angular.module('dugun.forms');
} catch (e) {
  module = angular.module('dugun.forms', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/date-range/date-range.html',
    '<input date-range-picker class="form-control full-width date-picker" type="text" ng-model="dates" min="min" max="max" options="options" placeholder="{{ placeholder }}" clearable="clearable" ng-attr-form="{{ attrs.form ? attrs.form : undefined }}">');
}]);
})();

(function(module) {
try {
  module = angular.module('dugun.forms');
} catch (e) {
  module = angular.module('dugun.forms', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/radio/template.html',
    '<div class="radio" ng-repeat="option in options"><label><input type="radio" ng-model="$parent.model" ng-value="option.id" ng-required="{{ required ? true : false }}" name="{{ name }}"> <span ng-bind="option.name"></span></label></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('dugun.forms');
} catch (e) {
  module = angular.module('dugun.forms', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/required-asterisk/required-asterisk.html',
    '<i class="fa fa-asterisk red"></i>');
}]);
})();

(function(module) {
try {
  module = angular.module('dugun.forms');
} catch (e) {
  module = angular.module('dugun.forms', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/select2/multiple.html',
    '<ui-select class="full-width" ng-model="$parent.model" theme="select2" ui-select-required="{{ required ? true : false }}" search-enabled="searchEnabled()" ng-attr-form="{{ attrs.form ? attrs.form : undefined }}" multiple="multiple"><ui-select-match placeholder="{{ placeholder }}" allow-clear="{{ allowClear }}"><div ng-bind="$item.name"></div></ui-select-match><ui-select-choices repeat="item.id as item in options | props: {name: $select.search}"><p ng-bind-html="item.name | highlight: $select.search"></p></ui-select-choices></ui-select>');
}]);
})();

(function(module) {
try {
  module = angular.module('dugun.forms');
} catch (e) {
  module = angular.module('dugun.forms', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/select2/single.html',
    '<ui-select class="full-width" ng-model="$parent.model" theme="select2" ui-select-required="{{ required ? true : false }}" search-enabled="searchEnabled()" ng-attr-form="{{ attrs.form ? attrs.form : undefined }}" ng-disabled="ngDisabled ? true : false"><ui-select-match placeholder="{{ placeholder }}" allow-clear="{{ allowClear }}"><p ng-bind="$select.selected.name"></p></ui-select-match><ui-select-choices repeat="item.id as item in options | props: {name: $select.search}"><p ng-bind-html="item.name | highlight: $select.search"></p></ui-select-choices></ui-select>');
}]);
})();

(function(module) {
try {
  module = angular.module('dugun.forms');
} catch (e) {
  module = angular.module('dugun.forms', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/text-input/text-input.html',
    '<input type="{{ type || \'text\' }}" class="form-control full-width" ng-if="!maxlength || disableLength" ng-model="$parent.model" ng-required="required" ng-attr-placeholder="{{ placeholder }}" ui-mask="{{ mask || \'\' }}" ng-attr-maxlength="{{ maxlength }}" ng-attr-min="{{ attrs.min ? attrs.min : undefined }}" ng-attr-max="{{ attrs.max ? attrs.max : undefined }}" ng-attr-step="{{ attrs.step ? attrs.step : undefined }}" ng-attr-form="{{ attrs.form ? attrs.form : undefined }}" ng-attr-name="{{ attrs.name ? attrs.name : undefined }}" number-only="{{ numberOnly() ? \'true\' : \'\' }}" ng-model-options="ngModelOptions || {}"><div class="input-group" ng-if="maxlength && !disableLength"><input type="{{ type || \'text\' }}" class="form-control" ng-model="$parent.model" ng-required="required" ng-attr-id="{{ dgId }}" ng-attr-placeholder="{{ placeholder }}" ng-attr-maxlength="{{ maxlength }}" ng-attr-min="{{ attrs.min ? attrs.min : undefined }}" ng-attr-max="{{ attrs.max ? attrs.max : undefined }}" ng-attr-step="{{ attrs.step ? attrs.step : undefined }}" ng-attr-form="{{ attrs.form ? attrs.form : undefined }}" number-only="{{ numberOnly() ? \'true\' : \'\' }}" ng-model-options="ngModelOptions || {}"><div class="input-group-addon" ng-bind="maxlength - model.length"></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('dugun.forms');
} catch (e) {
  module = angular.module('dugun.forms', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/textarea/textarea.html',
    '<textarea class="form-control" ng-model="model" ng-required="required" ng-attr-id="{{ dgId }}" ng-attr-placeholder="{{ placeholder }}" ng-attr-maxlength="{{ maxlength }}" ng-attr-rows="{{ rows }}" ng-attr-form="{{ attrs.form ? attrs.form : undefined }}" style="{{ style }}"></textarea>');
}]);
})();
