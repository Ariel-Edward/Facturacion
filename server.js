
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});


app.get('/p', function (req, res) {
    const persona = require('./domainobjects/persona.js');
    var p = new persona.Persona("Juan Perez", 1234);
    res.send(p);
});


app.get('/m', function (req, res) {
    const moneda = require('./domainobjects/moneda.js');
    var m = new moneda.Moneda("BOB");
    res.send(m);
});

console.log("Servidor listo en http://localhost:3000");

app.listen(3000);
