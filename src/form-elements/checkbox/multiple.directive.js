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
            labelTemplate: '@'
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
