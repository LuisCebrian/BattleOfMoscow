BoM = {};

BoM.Counter = function(strength,movement) {
    this.strength = strength;
    this.movement = movement;
};

BoM.Counter.prototype.getStrength = function() {
    return this.strength;
};

BoM.Counter.prototype.getMovement = function() {
    return this.movement;
};
