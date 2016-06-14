describe('dgFormSelect2 directive', function() {
    var $compile,
        $rootScope;

    beforeEach(module('dugun.forms'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('compiles the code', (function() {
        var element = $compile('<dg-form-select2 options="[{id: 1, name: \'a\'}]"></dg-form-select2>')($rootScope);
        $rootScope.$digest();
        expect($(element).find('.ui-select-container').length).toBeTruthy();
    }));

    it('displays options', function() {
        $rootScope.options = [
            {id: 1, name: 'first'},
            {id: 2, name: 'second'},
        ];

        var element = $compile('<dg-form-select2 options="options" ng-model="model"></dg-form-select2>')($rootScope);
        $rootScope.$digest();

        var uiSelectScope = element.find('.ui-select-container').scope();
        uiSelectScope.$select.open = true;
        uiSelectScope.$digest();

        expect($(element).find('.ui-select-choices-row-inner p').first().text()).toBe('first');
    });
});
