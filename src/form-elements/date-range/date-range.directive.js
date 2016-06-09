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
            min: '=',
            max: '=',
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
