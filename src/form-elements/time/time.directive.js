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
