/* cache de archivos estaticos 
etag es una representacion del contenido del archivo
que usa el navegador almacena para comparar peticiones*/
const express = require ('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets',{
etag: false /* dado que el etag es menos eficiente, usamos ETAG false para desactivarlo ya que por defecto nuestro servidor va a usarlos */
maxAge: 180000})); /* en su lugar utilizaremos maxAGE, para establecer el tiempo en que la respuesta a x peticion no va a cambiar en una n cantidad de tiempo  */

app.get('/', function(req, res){ 
    res.render('index');              
});

app.listen(3000);