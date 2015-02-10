module.exports = function(router, app, mongoose) {
    var models     = require('../models/partido')(app, mongoose);
    /*Controllers*/
    
    var controller = require('../controllers/partidos');
    
    /*Routes*/
    router.route('/partidos/obtenerPartidosCercanos/:idUser/:ratio/:lat/:lng').get(controller.traerPartidosCernanos);
    router.route('/partidos/add').post(controller.nuevoPartido);
};