/* primera comsulta (creamos una tabla)
normalmente al hacer consultas con lenguajes de programacion 
deberemos de abrir la conexion y luego cerrarla, con sqlite3 no es
necesario mandar a llamar un metodo para abrir una conexion. Al crear un objeto
de conexion con la base de datos la conexion se abre automaticamente  */
const sqlite3 = require('sqlite3'); /* importamos nuestra libreria */

/* aqui creamos el objeto de conexion mencionado anteriormente, colocando en el argumento
el nombre de nuestra base de datos */
let db = new sqlite3.Database('proyecto-backend');

/* despues, procedemos a realizar una consulta en lenguaje SQL (en este caso vamos a crear una tabla)*/
db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');
/* al final, cerramos la conexion para evitar fugas de memoria */
db.close();