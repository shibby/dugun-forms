describe('dgFormText directive', function() {
    var $compile,
        $rootScope;

    beforeEach(module('dugun.forms'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('compiles the code', function() {
        var element = $compile("<dg-form-text></dg-form-text>")($rootScope);
        $rootScope.$digest();
        expect($(element).find('input').length).toBeTruthy();
    });

    it('sets the name', function() {
        $rootScope.modelNumber = null;
        var element = $compile(
            '<form name="form">' +
            '<dg-form-text name="numberField" type="number" number-only="true" ng-model="modelNumber"></dg-form-text>' +
            '</form>'
        )($rootScope);
        $rootScope.$digest();

        var form = $rootScope.form;
        expect(form.numberField).toBeTruthy();
    });
});
