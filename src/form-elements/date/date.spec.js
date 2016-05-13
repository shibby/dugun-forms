describe('dgFormDate directive', function() {
    var $compile,
        $rootScope,
        moment;

    beforeEach(module('dugun.forms'));

    beforeEach(inject(function(_$compile_, _$rootScope_, _moment_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        moment = _moment_;
    }));

    it('compiles the code', function() {
        var element = $compile("<dg-form-date></dg-form-date>")($rootScope);
        $rootScope.$digest();
        expect($(element).find('input').attr('uib-datepicker-popup')).toBeDefined();
    });

    it('when model changed, view value is set', function() {
        $rootScope.dateModel = null;
        var element = $compile(
            '<form name="form">' +
            '<dg-form-date ng-model="dateModel" name="dateField"></dg-form-date>' +
            '</form>'
        )($rootScope);
        $rootScope.$digest();
        var form = $rootScope.form;
        var isolatedScope = element.find('dg-form-date').isolateScope();
        expect(form.dateField.$viewValue).toBe(null);

        $rootScope.dateModel = '2015-01-01';
        $rootScope.$digest();
        expect(form.dateField.$viewValue).toBe('2015-01-01');

        expect(isolatedScope.date.constructor.name).toBe('Date');
    });
});
