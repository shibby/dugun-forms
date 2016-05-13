function UISelectRequiredDirective() {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            var selectElement = $('<select class="hidden-select"></select>')
                .prop('required', true);
            if(attrs.form) {
                selectElement.attr('form', attrs.form);
            }

            scope.$watch(function () {
                return ngModel.$modelValue;
            }, function (newValue) {
                if(typeof newValue !== 'undefined' && newValue !== null) {
                    selectElement.append('<option value="'+ newValue +'"></option>')
                        .find('option:last-child')
                        .prop('selected', true);
                } else {
                    selectElement.find('option').remove();
                }
            });

            // Remove the hidden select if required is false
            scope.$watch(function() {
                return attrs.uiSelectRequired;
            }, function(newValue) {
                if(newValue === 'true') {
                    $(element).after(selectElement);
                } else {
                    $(selectElement).remove();
                }
            });
        }
    };
}

angular.module('dugun.forms.helpers.uiSelectRequired')
    .directive('uiSelectRequired', UISelectRequiredDirective);
