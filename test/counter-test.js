var buster = require('buster');
var mylib = require('../sources/counter.js');

buster.testCase("Counter", {
    "Testeamos que devuelve la fuerza con que se construyó": function () { 
        var counter = new BoM.Counter(8);
        assert.equals(8, counter.getStrength());
    },

    "states the obvious": function () {
        assert(true);
    }
});

