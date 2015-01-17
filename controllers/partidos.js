var mongoose = require('mongoose');
var Partido  = mongoose.model('Partido');

exports.traerPartidos = function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    
    Partido.find(function(err, partidos) {
        if(!err) {
            res.send(partidos);
        } else {
            console.log('ERROR: ' + err);
        }
    });
};

exports.nuevoPartido = function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    
    console.log('POST - Create Partido');
    console.log(req.body);

    var partido = new Partido({
        nombreCompleto:     req.body.nombreCompleto,
        telefono:           req.body.telefono,
        email:              req.body.email,
        tipoCancha:         req.body.tipoCancha,
        faltantes:          req.body.seasons,
        fechaPartido:       req.body.fechaPartido,
        fecha:              req.body.fecha,
        ubicacion:          req.body.ubicacion
    });

    partido.save(function(err) {
        if(!err) {
            console.log('Created');
        } else {
            console.log('ERROR: ' + err);
        }
    });

    res.send(Partido);
};


/*

//File: routes/Partidos.js
module.exports = function(app) {

  var Partido = require('../models/Partido.js');

    //GET - Return all Partidos in the DB
    findAllPartidos = function(req, res) {
        Partido.find(function(err, Partidos) {
            if(!err) {
                res.send(Partidos);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };
    
    findByTitle = function(req, res){
        Partido.find(req.params.title, function(err, Partidos){
            if(!err){
                res.send(Partidos);
            }else{
                console.log('ERROR: ' + err);
            }
        });
    };
    
    //GET - Return a Partido with specified ID
    findById = function(req, res) {
        console.log("Find: " + req.params.id);
        Partido.findById(req.params.id, function(err, Partido) {
            if(!err) {
                res.send(Partido);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };
    
    //PUT - Update a register already exists
    updatePartido = function(req, res) {
        Partido.findById(req.params.id, function(err, Partido) {
            Partido.title   = req.body.title;
            Partido.year    = req.body.year;
            Partido.country = req.body.country;
            Partido.poster  = req.body.poster;
            Partido.seasons = req.body.seasons;
            Partido.genre   = req.body.genre;
            Partido.summary = req.body.summary;

            Partido.save(function(err) {
                if(!err) {
                    console.log('Updated');
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(Partido);
            });
        });
    }
    
    //DELETE - Delete a Partido with specified ID
    deletePartido = function(req, res) {
        
        Partido.findById(req.params.id, function(err, Partido) {
            Partido.remove(function(err) {
                if(!err) {
                    console.log('Removed');
                } else {
                    console.log('ERROR: ' + err);
                }
            })
        });
        
    }
    
    //Link routes and functions
    app.get('/Partidos', findAllPartidos);
    app.get('/Partido/:id', findById);
    app.get('/Partido/title/:title', findByTitle);
    app.post('/Partido', addPartido);
    app.put('/Partido/:id', updatePartido);
    app.delete('/Partido/:id', deletePartido);
}*/