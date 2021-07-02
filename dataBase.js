/* insertar registros */
const express =  require('express'); /* importamos express, pues vamos a crear un servidor */
const sqlite3 = require('sqlite3'); /* importamos sqlite3 pues vamos a modificar nuestra base de datos */
const bodyParser = require('body-parser'); /* dado que vamos a enviar una peticion con POST, es necesario que importemos bodyparser */

const app = express();

app.use(bodyParser.urlencoded({extended: true})); /* configuramos bodyparser */

let db = new sqlite3.Database('proyecto-backend');

app.post('/pendientes', function(req,res){ /* configuramos la insercion al evento de una peticion post a la direccion pendientes */
    db.run("INSERT INTO tasks(description) VALUES('hola mundo')"); /* la estructura es la misma db.run y las instrucciones SQL como argumentos */
    res.send('Insercion finalizada exitosamente'); /* al final, como respuesta mostraremos que la insercion se realizo exitosamente */
})

/* db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))'); ya que vamos a insertar registros en la tabla tasks no es necesario
volver a ejecutar la instruccion para crear la tabla, ademas no podemos crear una tabla ya creada */

app.listen(3000);

/* para poder recibir peticiones colocaremos un listener a un evento del proceso */
process.on('SIGINT',function(){ /* dicho evento sera SIGINT */
    console.log('Adios - atte el servidor');
    db.close(); /* no colocaremos el cierre de la conexion con terminal al final ya que la conexion se cerraria antes de que seamos capaces de enviarle peticiones */
    process.exit(); /* esta instruccion nos permite cerrar el servidor de node independientemente de donde se ejecute */

})