module.exports = function(router, app, mongoose) {
    var models     = require('../models/partido')(app, mongoose);
    /*Controllers*/
    
    var controller = require('../controllers/partidos');
    
    /*Routes*/
    router.route('/partidos').get(controller.traerPartidos);
    router.route('/partido').post(controller.nuevoPartido);
};