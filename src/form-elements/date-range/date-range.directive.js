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
