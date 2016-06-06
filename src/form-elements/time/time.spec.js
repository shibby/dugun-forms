describe('dgFormTime directive', function() {
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
        var element = $compile("<dg-form-time></dg-form-time>")($rootScope);
        $rootScope.$digest();
        expect($(element).find('input').hasClass('ui-timepicker-input')).toBe(true);
    });

    it('initial view value is undefined', function() {
        var element = $compile(
            '<form name="form">' +
            '<dg-form-time ng-model="model" dg-name="field"></dg-form-time>' +
            '</form>'
        )($rootScope);
        $rootScope.$digest();
        var form = $rootScope.form;
        var isolatedScope = element.find('dg-form-time').isolateScope();
        expect(form.field.$viewValue).toBe(undefined);

    });

    it('when model changes, it updates view', function() {
        var element = $compile(
            '<form name="form">' +
            '<dg-form-time ng-model="model" dg-name="field"></dg-form-time>' +
            '</form>'
        )($rootScope);
        $rootScope.$digest();

        var form = $rootScope.form;
        var isolatedScope = element.find('dg-form-time').isolateScope();
        $rootScope.model = '15:00';
        $rootScope.$digest();

        expect(element.find('input').val()).toBe('15:00');
    });
});
