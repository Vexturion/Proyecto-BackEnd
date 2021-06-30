/* Motor de vistas */
const express = require ('express');

const app = express();

/* Usamos el metodo set del objeto app para configurar nuestro motor de vistas; en el primer argumento indicamos que usamos un motor de vistas
y en el segundo el motor de vistas que usaremos, en este caso ejs. Por defecto Express usara la carpeta views que creamos en nuestro proyecto 
para almacenar los archivos de las vistas y la extension de los archivos dependera del motor de vusta que usemos, en este caso .ejs */
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets')); 

app.get('/', function(req, res){ 
    res.render('index');          /*res.sendFile('index.html',{   con motores de vista no es necesario especificar rutas de archivo, unicamente usamos el metodo .render
                                        root: __dirname */         
});

app.listen(3000);