
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('API Facturacion 1.0');
});


app.get('/personas/:nombre/:nit', function (req, res) {
    const persona = require('./domainobjects/persona.js');
    var p = new persona.Persona(req.params.nombre, req.params.nit);
    res.send(p);
});


app.get('/monedas/:nombre', function (req, res) {
    const moneda = require('./domainobjects/moneda.js');
    var m = new moneda.Moneda(req.params.nombre);
    res.send(m);
});

app.get('/montos/:moneda/:valor', function (req, res) {
    const moneda = require('./domainobjects/moneda.js');
    var m = new moneda.Moneda(req.params.moneda);
    const monto = require('./domainobjects/monto.js');
    var mnt = new monto.Monto(req.params.valor, m);
    res.send(mnt);
});

console.log("Servidor listo en http://localhost:3000");

app.listen(3000);
