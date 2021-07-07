/* Sanitize */
const express =  require('express'); 
const sqlite3 = require('sqlite3'); 
const bodyParser = require('body-parser'); 

const app = express();

app.use(bodyParser.urlencoded({extended: true})); 

let db = new sqlite3.Database('proyecto-backend');

app.post('/pendientes', function(req,res){ 
    /* db.run("INSERT INTO tasks(description) VALUES('hola mundo')") dado que este hola mundo es estatico, cambiaremos nuestro codigo para insertar elementos que
    vengan en el cuerpoo de la peticion http de la siguiente manera */
    /*db.run(`INSERT INTO tasks(description) VALUES('${req.body.description}')`); /* sin embargo de esta forma exponemos nuestra base de datos a un ataque SQL injection  */
    /* utilizaremos sanitize para evitar que lo que el usuario envia se ejecute como comandos de SQL
    para usar SANITIZE en SQLite3 lo haremos de la siguienre manera */
    db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description);
    /* esto evita que lo que introduce el cliente sea leido como instrucciones SQL y se lea como un string normal
    en el parentesis de VALUES colocaremos ? y despues de la instruccion SQL los parametros que van a reemplazar a ? 
    sanitize va a limpiar lo que envie el usuario antes de insertarlo */
    res.send('Insercion finalizada exitosamente'); 
})

app.listen(3000);


process.on('SIGINT',function(){ 
    console.log('Adios - atte el servidor');
    db.close(); 
    process.exit(); 

})