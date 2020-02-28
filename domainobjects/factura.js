module.exports = {
    Factura: function(persona, monto, fecha, estado){
        this.persona = function(_persona) {
            if(!(_persona instanceof Persona)) {
                throw new Error("Persona no permitida");
            }
            return _persona;
        }(persona);
        
        this.monto = function(_monto) {
            if(!(_monto instanceof Monto)) {
                throw new Error("Monto no permitido");
            }
            return _monto;
        }(monto);
        
        this.fecha = function(_fecha) {
            if(!(_fecha instanceof Date)) {
                throw new Error("Fecha no permitida");
            }
            return _fecha;
        }(fecha);
        
        Object.freeze(this);
    }
}


