describe('dgFormSelect2Multiple directive', function() {
    var $compile,
        $rootScope;

    beforeEach(module('dugun.forms'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('compiles the code', (function() {
        var element = $compile('<dg-form-select2-multiple options="[{id: 1, name: \'a\'}]"></dg-form-select2-multiple>')($rootScope);
        $rootScope.$digest();
        expect($(element).find('.ui-select-container.ui-select-multiple').length).toBeTruthy();
    }));

    it('displays options', function() {
        $rootScope.options = [
            {id: 1, name: 'first'},
            {id: 2, name: 'second'},
        ];

        var element = $compile('<dg-form-select2-multiple options="options" ng-model="model"></dg-form-select2-multiple>')($rootScope);
        $rootScope.$digest();

        var uiSelectScope = element.find('.ui-select-container').scope();
        uiSelectScope.$select.open = true;
        uiSelectScope.$digest();

        expect($(element).find('.ui-select-choices-row-inner p').first().text()).toBe('first');
    });

    it('displays placeholder', function () {
        $rootScope.options = [
            {id: 1, name: 'first'},
            {id: 2, name: 'second'},
        ];

        var element = $compile('<dg-form-select2-multiple placeholder="Nice multiselect" options="options" ng-model="model"></dg-form-select2-multiple>')($rootScope);
        $rootScope.$digest();

        var placeholderElement = element.find('.ui-select-match').first();

        expect(placeholderElement.attr('placeholder')).toBe('Nice multiselect');
    });
});
