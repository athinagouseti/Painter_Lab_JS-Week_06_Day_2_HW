const PaintCan = function(litres){
    this.litres = litres;
};

PaintCan.prototype.isEmpty = function(){
    return this.litres === 0;
};

PaintCan.prototype.empty = function(){
    this.litres = 0;
}




module.exports = PaintCan;