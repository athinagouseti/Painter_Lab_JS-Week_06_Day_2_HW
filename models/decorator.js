const Decorator = function(room){
    this.room = room;
    this.stock = [];
};

Decorator.prototype.addCan = function(paintcan){
    this.stock.push(paintcan);
};

Decorator.prototype.calculateTotalLitres = function(){
    let totalLitres = 0;
    for (let currentCan of this.stock) {;
    totalLitres += currentCan.litres;
    };
    return totalLitres;
};

Decorator.prototype.hasEnoughPaint = function(){
    let totalLitres = this.calculateTotalLitres();
    return totalLitres >= this.room.area;
};

Decorator.prototype.paint = function(){
    if (this.hasEnoughPaint()) {
        this.room.paint();
    };

    let paintUsed = this.room.area
    for (let paintCan of this.stock) {
        if (paintUsed <= paintCan.litres) {
            paintCan.litres -= paintUsed;
            paintUsed -= paintUsed; 
        } else {
            paintUsed -= paintCan.litres;
            paintCan.empty();
        }
    }

};

Decorator.prototype.removeEmptyCans = function(){ 
    const newStock = []

    for (let can of this.stock) {
        if (can.litres > 0) {
            newStock.push(can)
        }
    }

    this.stock = newStock
}


module.exports = Decorator;