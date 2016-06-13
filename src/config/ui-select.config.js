function DugunFormsUISelectConfig(uiSelectConfig) {
    uiSelectConfig.theme = 'select2';
}

DugunFormsUISelectConfig.$inject = [
    'uiSelectConfig',
];

angular.module('dugun.forms').config(DugunFormsUISelectConfig);
