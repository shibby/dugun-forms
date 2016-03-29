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
