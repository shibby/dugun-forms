describe('dgFormDateRange directive', function() {
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
        var element = $compile("<dg-form-date-range></dg-form-date-range>")($rootScope);
        $rootScope.$digest();
        expect($(element).find('input').attr('date-range-picker')).toBeDefined();
    });
});
