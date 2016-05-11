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
});
