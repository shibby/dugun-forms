describe('dgFormBooleanSelect directive', function() {
    var $compile,
        $rootScope;

    beforeEach(module('dugun.forms'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('compiles the code', (function() {
        var element = $compile('<dg-form-boolean-select label-true="Yes" label-false="No"></dg-form-boolean-select>')($rootScope);
        $rootScope.$digest();
        expect($(element).find('.ui-select-choices').length).toBe(1);
    }));

    it('displays placeholder', function() {
        var element = $compile('<dg-form-boolean-select placeholder="Boolean select is nice" label-true="Yes" label-false="No"></dg-form-boolean-select>')($rootScope);
        $rootScope.$digest();

        var placeholderElement = element.find('.select2-default > span').first();

        if(placeholderElement.length === 0) {
            placeholderElement = element.find('.ui-select-placeholder').first();
        }

        expect(placeholderElement.text()).toBe('Boolean select is nice');
    });
});
