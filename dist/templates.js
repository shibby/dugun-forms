(function(module) {
try {
  module = angular.module('dugun.forms');
} catch (e) {
  module = angular.module('dugun.forms', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('form-elements/boolean/boolean-select.html',
    '<dg-form-select2 ng-model="model" options="options" placeholder="{{ placeholder }}" allow-clear="{{ allowClear }}" ng-required="required ? true : false"></dg-form-select2>');
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
    '<div ng-repeat="option in options"><input type="checkbox" ng-model="option.selected"> {{ option.name }}</div>');
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
    '<div class="checkbox"><label><input type="checkbox" ng-model="model" ng-true-value="{{ trueValue }}" ng-false-value="{{ falseValue }}" name="{{ name }}" ng-required="{{ required ? true : false }}"> {{ label }}</label></div>');
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
    '<input date-range-picker class="form-control full-width date-picker" type="text" ng-model="dates" min="min" max="max" options="options" placeholder="{{ placeholder }}" clearable="clearable">');
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
    '<div class="radio" ng-repeat="option in options"><label><input type="radio" ng-model="$parent.model" ng-value="option.id" ng-required="{{ required ? true : false }}" name="{{ name }}"> {{ option.name }}</label></div>');
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
    '<ui-select class="full-width" ng-model="$parent.model" theme="select2" ui-select-required="{{ required ? true : false }}" multiple="multiple"><ui-select-match placeholder="{{ placeholder }}" allow-clear="{{ allowClear }}"><div ng-bind="$item.name"></div></ui-select-match><ui-select-choices repeat="item.id as item in options | propsFilter: {name: $select.search}"><p ng-bind-html="item.name | highlight: $select.search"></p></ui-select-choices></ui-select>');
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
    '<ui-select class="full-width" ng-model="$parent.model" theme="select2" ui-select-required="{{ required ? true : false }}" search-enabled="searchEnabled()"><ui-select-match placeholder="{{ placeholder }}" allow-clear="{{ allowClear }}"><p ng-bind="$select.selected.name"></p></ui-select-match><ui-select-choices repeat="item.id as item in options | propsFilter: {name: $select.search}"><p ng-bind-html="item.name | highlight: $select.search"></p></ui-select-choices></ui-select>');
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
    '<input type="{{ type || \'text\' }}" class="form-control full-width" ng-if="!maxlength || disableLength" ng-model="$parent.model" ng-required="required" ng-attr-placeholder="{{ placeholder }}" ui-mask="{{ mask || \'\' }}"><div class="input-group" ng-if="maxlength && !disableLength"><input type="{{ type || \'text\' }}" class="form-control" ng-model="$parent.model" ng-required="required" ng-attr-id="{{ dgId }}" ng-attr-placeholder="{{ placeholder }}" ng-attr-maxlength="{{ maxlength }}"><div class="input-group-addon" ng-bind="maxlength - model.length"></div></div>');
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
    '<textarea class="form-control" ng-model="model" ng-required="required" ng-attr-id="{{ dgId }}" ng-attr-placeholder="{{ placeholder }}" ng-attr-maxlength="{{ maxlength }}" ng-attr-rows="{{ rows }}" style="{{ style }}"></textarea>');
}]);
})();
