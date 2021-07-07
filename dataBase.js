/* ORM Alternativamente, los desarrolladores backend usamos lo que se conocen como Object Relational Mapping, u ORM por sus siglas. 
Estas librerías se encargan de ofrecer clases y métodos para que podamos manipular la base de datos usando programación orientada a objetos. */
const express =  require('express'); 
const sqlite3 = require('sqlite3'); 
const bodyParser = require('body-parser'); 
const Sequelize = require('sequelize'); /* importamos sequelize, el ORM de nodejs */

const app = express();

app.use(bodyParser.urlencoded({extended: true})); 

/* et db = new sqlite3.Database('proyecto-backend'); para crear una conexion entre sequelize y sqlite3 es necesario instaciar un nuevo objeto de la clase sequelize
por lo que no necesitaremos esto */
const sequelize = new Sequelize('proyecto-backend',null,null,{ /* el constructor de sequelize recibe de dos a 4 argumentos: nombre de la base de datos, usuario y contraseña  */
    /* en el cuarto argumento pasaremos un JSON con configuraciones adicionales a la conexion */
    dialect: 'sqlite',/* aqui especificamos a que motor vamos a conectar a sequelize, en este caso sqlite */
    storage: './proyecto-backend' /* dado que nuestro motor es sqlite tendremos que pasar adicionalmente la ruta al archivo en que almacenamos la base de datos */
});
 
app.post('/pendientes', function(req,res){ 
    
    db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description);
    res.send('Insercion finalizada exitosamente'); 
})

app.listen(3000);


/*process.on('SIGINT',function(){ 
    console.log('Adios - atte el servidor');
    db.close(); 
    process.exit(); 
    )}
    dado que usaremos ORM tanto el codigo con el que abriamos la conexion a la base de datos como el codigo
    con el que la cerramos ya no seran necesarios */ 

