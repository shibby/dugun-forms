describe('uiSelectRequired directive', function() {
    var $compile,
        $rootScope,
        element,
        form;

    beforeEach(module('dugun.forms'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('ng-required=true works', (function() {
        element = $compile(
            '<form name="form">' +
            '<dg-form-select2 options="[{id: 1, name: \'a\'}]" ng-required="true" ng-model="something"></dg-form-select2>' +
            '<button type="submit"></button>' +
            '</form>'
        )($rootScope);
        $rootScope.$digest();
        form = $rootScope.form;
        expect($rootScope.form.$valid).toBe(false);
    }));

    it('ng-required=false works', (function() {
        element = $compile(
            '<form name="form">' +
            '<dg-form-select2 options="[{id: 1, name: \'a\'}]" ng-required="false" ng-model="something"></dg-form-select2>' +
            '<button type="submit"></button>' +
            '</form>'
        )($rootScope);
        $rootScope.$digest();
        form = $rootScope.form;
        expect($rootScope.form.$valid).toBe(true);
    }));
});
