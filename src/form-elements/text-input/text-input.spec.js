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
});
