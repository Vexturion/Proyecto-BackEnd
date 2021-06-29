/* Recibimos datos con Post 
la principal diferencia de POST y GET es que la informacion se envia en el CUERPO de la peticion y no en
la peticion y no en la direccion*/

const express = require('express');
const bodyParser = require('body-parser'); /* importamos nuestra libreria body-parser, para poder analizar el cuerpo 
de la peticion ya que antes de tenerla disponible en codigo el cuerpo de la peticion podria venir con informacion JSON
o datos estructurados en otro formato. Parse es necesario para poder ver la peticion de forma uniforme y clara */


const app = express();

/* en esta linea establecemos que como parte del proceso use el analizador body parser para leer el cuerpo de datos de una peticion,
particularmente le pedimos que use el analizador para leer el cuerpo de una peticion que venga con el formqto url encoded
extended es necesario para enviar enviar parametros anidados y asi enviar un objeto con propiedades en la peticion */
app.use(bodyParser.urlencoded({ extended: true })) 

app.get('/saludo', function (req, res) {
    res.send(`Hola ${req.query.name}`);
})

app.post('/', function (req, res) {  /* establecemos nuestro metodo post y la direccion a donde se enviara, en este caso "/"*/
    res.send(`Hola ${req.body.name}`); /* aqui colocamos que nuestra peticion va en la propiedad cuerpo, ya que es un post los datos no se recibiran en query params */
})

app.listen(3000);