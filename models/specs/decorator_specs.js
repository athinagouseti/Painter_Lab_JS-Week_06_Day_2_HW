const assert = require('assert');
const Decorator = require('../decorator.js');
const Room = require('../room.js');
const PaintCan = require('../paint_can.js');

describe('Decorator', function(){
    let decorator;
    let room;

    beforeEach(function(){
        room = new Room(20);
        decorator = new Decorator(room);
    });

    it('should start with an empty paint stock', function(){
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add a can of paint to paint stock', function(){
        let paintcan = new PaintCan(15);
        decorator.addCan(paintcan);
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [paintcan]);
    });

    it('should be able to calculate total litres of paint stock', function(){
        let paintcan1 = new PaintCan(15);
        let paintcan2 = new PaintCan(20);
        decorator.addCan(paintcan1);
        decorator.addCan(paintcan2);
        const actual = decorator.calculateTotalLitres();
        assert.strictEqual(actual, 35);
    });

    it('should be able to calculate if it has enough paint to paint room (false)', function(){
        let paintcan1 = new PaintCan(15);
        decorator.addCan(paintcan1);
        const actual = decorator.hasEnoughPaint();
        assert.strictEqual(actual, false);
    });

    it('should be able to calculate if it has enough paint to paint room (true)', function(){
        let paintcan1 = new PaintCan(10);
        let paintcan2 = new PaintCan(10);
        decorator.addCan(paintcan1);
        decorator.addCan(paintcan2);
        const actual = decorator.hasEnoughPaint();
        assert.strictEqual(actual, true);
    });

    it('should be able to paint room if has enough paint in stock (true)', function(){
        let paintcan1 = new PaintCan(10);
        let paintcan2 = new PaintCan(10);
        decorator.addCan(paintcan1);
        decorator.addCan(paintcan2);
        decorator.paint();
        const actual = decorator.room.painted;
        assert.strictEqual(actual, true);
    });

    it('should be able to paint room if has enough paint in stock (false)', function(){
        let paintcan1 = new PaintCan(10);
        let paintcan2 = new PaintCan(8);
        decorator.addCan(paintcan1);
        decorator.addCan(paintcan2);
        decorator.paint();
        const actual = decorator.room.painted;
        assert.strictEqual(actual, false);
    })

    it('should be able to decrease amount of paint in stock when painting', function(){
        let paintcan1 = new PaintCan(10);
        let paintcan2 = new PaintCan(10);
        decorator.addCan(paintcan1);
        decorator.addCan(paintcan2);
        decorator.paint();
        const actual = decorator.calculateTotalLitres();
        assert.strictEqual(actual, 0);
    });

    it('should be able to remove empty paint cans from stock', function(){
        let paintcan1 = new PaintCan(0);
        let paintcan2 = new PaintCan(0);
        let paintcan3 = new PaintCan(10);
        decorator.addCan(paintcan1);
        decorator.addCan(paintcan2);
        decorator.addCan(paintcan3);
        decorator.removeEmptyCans()
        const actual = decorator.stock
        assert.deepStrictEqual(actual, [paintcan3])
    })
});
