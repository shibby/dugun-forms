describe('dgFormDateTime directive', function() {
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
        var element = $compile("<dg-form-date-time></dg-form-date-time>")($rootScope);
        $rootScope.$digest();
        expect($(element).find('dg-form-date, dg-form-time').length).toBe(2);
    });

    it('initial value is undefined', function() {
        $rootScope.model = null;
        var element = $compile(
            '<form name="form">' +
            '<dg-form-date-time ng-model="model" name="field"></dg-form-date-time>' +
            '</form>'
        )($rootScope);
        $rootScope.$digest();
        var form = $rootScope.form;
        var isolatedScope = element.find('dg-form-date-time').isolateScope();
        expect(form.field.$viewValue).toBe(null);
    });

    it('initial value is applied to model', function() {
        $rootScope.model = '2015-05-01 09:00:00';
        var element = $compile(
            '<form name="form">' +
            '<dg-form-date-time ng-model="model" name="field"></dg-form-date-time>' +
            '</form>'
        )($rootScope);
        $rootScope.$digest();

        var isolatedScope = element.find('dg-form-date-time').isolateScope();
        expect(isolatedScope.date).toBe('2015-05-01');
        expect(isolatedScope.time).toBe('09:00');
    });

    it('when date changed, model is changed', function() {
        var element = $compile(
            '<form name="form">' +
            '<dg-form-date-time ng-model="model" name="field"></dg-form-date-time>' +
            '</form>'
        )($rootScope);
        $rootScope.$digest();

        var isolatedScope = element.find('dg-form-date-time').isolateScope();
        isolatedScope.date = '2015-05-01';
        $rootScope.$digest();
        expect(isolatedScope.model).toBe('2015-05-01 00:00:00');
    });

    it('when time changed, model is changed', function() {
        var element = $compile(
            '<form name="form">' +
            '<dg-form-date-time ng-model="model" name="field"></dg-form-date-time>' +
            '</form>'
        )($rootScope);
        $rootScope.$digest();

        var isolatedScope = element.find('dg-form-date-time').isolateScope();
        isolatedScope.time = '09:00';
        $rootScope.$digest();

        expect(isolatedScope.model).toBe(moment().format('YYYY-MM-DD') + ' 09:00:00');
    });
});
