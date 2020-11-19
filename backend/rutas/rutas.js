const app = require('express');
const router = app.Router();

const coneccion = require('../contenedor');

router.get('/ingresarp', function(req, res){const query = "SELECT * FROM usuarios_profesores"
    coneccion.query(query, (err, respuesta) => {
        res.json(respuesta)
    }
    )
})

router.get('/ingresare', function(req, res){
    const query = "SELECT * FROM usuarios_estudiantes"

    coneccion.query(query, (err, respuesta) => {
        res.json(respuesta)
    }
    )
})

router.get('/alertas/:codigo', function(req, res){
    const query = `SELECT * FROM alertas WHERE id_profesor = ${req.params.codigo}`;
    coneccion.query(query, (err, respuesta) => {
        res.json(respuesta);
        

    }
    )
})

router.get('/buscarestudiante/:codigo', function(req, res){
    const query = `SELECT * FROM estudiantes WHERE id_estudiante = ${req.params.codigo}`;
    coneccion.query(query, (err, respuesta) => {
        res.json(respuesta);})
})

router.get('/profesores', function(req, res){
const query = "SELECT * FROM profesores"
  coneccion.query(query, (err, respuesta) => {
        res.json(respuesta)
     }
    )
})

router.post('/agregaralerta', (req, res) => {
  const query = 'INSERT INTO alertas SET ?';
     const parametros = {
         id_estudiante: req.body.idestudiante,
         id_profesor: req.body.idprofesor,
         descAlerta: req.body.desc
    };
  coneccion.query(query, parametros, error => {
        res.send('Se creo')
    }
    )
})

module.exports = router;