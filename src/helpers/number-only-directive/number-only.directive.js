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
