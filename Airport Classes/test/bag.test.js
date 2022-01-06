const Bag = require('../Bag')


describe('defines a suite of tests for the Bag class', function () { 

    test('has correct weight', function () {
        // given
        const mandysBag = new Bag(13);

        // then
        expect(mandysBag.weight).toBe(13);
    });

    test('cheks if over limit', function () {
        // given
        const mandysBag = new Bag(13);
        
        // then
        expect(mandysBag.isOverLimit()).toBe(false);
    });

});