module.exports = function(app, mongoose) {

	var partidoSchema = new mongoose.Schema({
        nombreCompleto:         String,        
        telefono:               String,        
        email:                  String,        
        tipoCancha:             Number,        
        faltantes:              Number,        
        fechaPartido:           Date,
        fecha:                  {   type: Date, default: Date.now   },
        ubicacion:              {
                                    direccion:  String,
                                    lat:        Number,
                                    lng:        Number
                                }
    });

	mongoose.model('Partido', partidoSchema);
};
