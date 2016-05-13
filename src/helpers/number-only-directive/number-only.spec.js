describe('numberOnly directive', function() {
    var $compile,
        $rootScope;

    beforeEach(module('dugun.forms'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $rootScope.modelNumber = null;
        var element = $compile(
            '<form name="form">' +
            '<dg-form-text name="numberField" type="number" number-only="true" ng-model="modelNumber"></dg-form-text>' +
            '<dg-form-text name="textField" number-only="true" ng-model="modelNumber"></dg-form-text>' +
            '</form>'
        )($rootScope);
        $rootScope.$digest();
    }));

    it('type=number accepts integer from input', function() {
        var form = $rootScope.form;
        form.numberField.$setViewValue('23');
        expect($rootScope.modelNumber).toBe(23);
    });

    it('type=number accepts float from input', function() {
        var form = $rootScope.form;
        form.numberField.$setViewValue('23.32');
        expect($rootScope.modelNumber).toBe(23.32);
    });

    it('type=text accepts integer from input', function() {
        var form = $rootScope.form;
        form.textField.$setViewValue('23');
        expect($rootScope.modelNumber).toBe('23');
    });

    it('type=text accepts float from input', function() {
        var form = $rootScope.form;
        form.textField.$setViewValue('23.32');
        expect($rootScope.modelNumber).toBe('23.32');
    });
});
