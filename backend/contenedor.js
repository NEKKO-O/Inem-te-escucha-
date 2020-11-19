const mysql = require('mysql')

const coneccion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'inemtecuida'
});

coneccion.connect(err => {
    console.log('Base de datos corriendo');
})

module.exports = coneccion;