const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('PaintCan', function(){
    let paintCan;
    
    beforeEach(function(){
        paintCan = new PaintCan(15);
    });

    it('should have a number of litres of paint', function(){
        const actual = paintCan.litres;
        assert.strictEqual(actual, 15);
    });

    it('should be able to check if it is empty (false)', function(){
        const actual = paintCan.isEmpty();
        assert.strictEqual(actual, false);
    });

    it('should be able to check if it is empty (true)', function(){
        paintCan.litres = 0;
        const actual = paintCan.isEmpty();
        assert.strictEqual(actual, true);
    });

    // it('should be able to empty itself', function(){
    //     paintCan.empty();
    //     const actual = paintCan.isEmpty();
    //     assert.strictEqual(actual, true);
    // });

    it('should be able to empty itself', function(){
        paintCan.empty();
        const actual = paintCan.litres;
        assert.strictEqual(actual, 0);
    });
});