const mPersona = require('../domainobjects/persona.js');

function sleep(seconds){
    var waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) true;
}


module.exports = {
    Personas: function () {

        const sqlite3 = require('sqlite3').verbose();
        var _db = new sqlite3.Database('./data/data.db');

        this.list = function () {
            var sql = "SELECT nit,nombre FROM persona";
            _db.all(sql, [], function(err, rows) {
                if (err) {
                    return console.error(err.message);
                }
                for (var i = 0; i < rows.length; i++) {
                    if (i == 0){
                        global.resultlist = [];
                    }
                    row = rows[i];
                    global.resultlist[global.resultlist.length] = new mPersona.Persona(row.nombre, row.nit);
                }
            });
            return global.resultlist;
        };

        this.get = function (nit) {
            //global.result = {};
            var sql = "SELECT nit,nombre FROM persona WHERE nit = ?";
            _db.get(sql, [nit], function(err, row) {
                if (err) {
                    return console.error(err.message);
                }
                global.result = (row
                    ? new mPersona.Persona(row.nombre, row.nit)
                    : {});

            });
            return global.result;
        };

        this.save = function (persona) {
            if(!(persona instanceof mPersona.Persona)) {
                //throw new Error("Persona no permitida");
                return false;
            }
            var stmt = _db.prepare("INSERT OR IGNORE INTO persona VALUES (?,?)");
            stmt.run(persona.nit, persona.nombre);
            stmt.finalize();
            return true;
        };

        this.delete = function (nit) {

        };

        Object.freeze(this);
    }
}


