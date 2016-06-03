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

    it('when model is undefined, view value is empty string', function() {
        $rootScope.dateStartModel = undefined;
        $rootScope.dateEndModel = undefined;
        var element = $compile(
            '<form name="form">' +
            '<dg-form-date-range ng-model-start="dateStartModel" ng-model-end="dateEndModel" dg-name="dateRangeField"></dg-form-date-range>' +
            '</form>'
        )($rootScope);
        $rootScope.$digest();
        var form = $rootScope.form;
        var isolatedScope = element.find('dg-form-date-range').isolateScope();
        expect(form.dateRangeField.$viewValue).toBe('');
    });

    it('when model is set before init, view value is set', function() {
        $rootScope.dateStartModel = '2015-01-01';
        $rootScope.dateEndModel = '2016-01-01';
        var element = $compile(
            '<form name="form">' +
            '<dg-form-date-range ng-model-start="dateStartModel" ng-model-end="dateEndModel" dg-name="dateRangeField"></dg-form-date-range>' +
            '</form>'
        )($rootScope);
        $rootScope.$digest();
        var form = $rootScope.form;
        var isolatedScope = element.find('dg-form-date-range').isolateScope();
        expect(form.dateRangeField.$viewValue).toBe('2015-01-01 - 2016-01-01');
    });

    it('when model is set after init, view value is set', function() {
        var element = $compile(
            '<form name="form">' +
            '<dg-form-date-range ng-model-start="dateStartModel" ng-model-end="dateEndModel" dg-name="dateRangeField"></dg-form-date-range>' +
            '</form>'
        )($rootScope);
        $rootScope.$digest();

        $rootScope.dateStartModel = '2015-01-01';
        $rootScope.dateEndModel = '2016-01-01';
        $rootScope.$digest();
        var form = $rootScope.form;
        var isolatedScope = element.find('dg-form-date-range').isolateScope();
        expect(form.dateRangeField.$viewValue).toBe('2015-01-01 - 2016-01-01');
    });

    xit('when viewValue is changed, models are set', function() {
        // $rootScope.dateStartModel = undefined;
        // $rootScope.dateEndModel = undefined;
        var element = $compile(
            '<form name="form">' +
            '<dg-form-date-range ng-model-start="dateStartModel" ng-model-end="dateEndModel" dg-name="dateRangeField"></dg-form-date-range>' +
            '</form>'
        )($rootScope);
        $rootScope.$digest();

        var form = $rootScope.form;
        form.dateRangeField.$viewValue = '2015-01-01 - 2016-01-01';
        $rootScope.$digest();

        var isolatedScope = element.find('dg-form-date-range').isolateScope();
        console.log($rootScope.dateStartModel);
        expect($rootScope.dateStartModel).toBe('2015-01-01');
    });
});
