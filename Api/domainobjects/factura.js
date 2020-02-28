module.exports = {
    Factura: function(persona, monto){
        this.persona = function(_persona) {
            if(!(_persona instanceof Persona)) {
                throw new Error("Persona no permitida");
            }
            return _persona;
        }(persona);
        
        Object.freeze(this);
    }
}


