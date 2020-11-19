const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const mysql = require('./contenedor')

app.use('/api', require('./rutas/rutas'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.listen('4000', function(){
  console.log("server en el puerto 4000")
})
