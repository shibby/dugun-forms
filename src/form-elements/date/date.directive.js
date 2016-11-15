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
            ngChange: '&'
        },
        templateUrl: 'form-elements/date/date.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;

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
