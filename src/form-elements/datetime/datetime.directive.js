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
            required: '=',
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
