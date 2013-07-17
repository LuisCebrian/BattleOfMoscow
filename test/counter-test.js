var buster = require('buster');
var mylib = require('../sources/counter.js');

buster.testCase("Counter", {
    "Testeamos que devuelve la fuerza con que se construyó": function () { 
        var counter = new BoM.Counter(8);
        assert.equals(8, counter.getStrength());
    },

    "Testear la capacidad de movimiento": function () {
        // Given 
        var counter = new BoM.Counter(8,4);

        // When
        var obtained = counter.getMovement();
        
        // Then
        var expected = 4;
        assert.equals(expected,obtained);
        assert.equals(8,counter.getStrength());
    }
});

