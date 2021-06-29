/* Servir archivos estativos */
const express = require ('express');

const app = express();

/* middleware de archivos estaticos */
/* especificamos una carpeta donde tendremos los arcvhivos estaticos con express.static */
app.use('/assets', express.static('assets')); /* colocamos la direccion de los archivos estaticos detras de una ruta, que no tiene que ver con el nombre de la carpeta
donde si tiene que ver el nombre de la carpeta es en el argumento para el metodo express.static('assets') */

app.get('/', function(req, res){ 
    res.sendFile('index.html',{ 
        root: __dirname         
    });
});

app.listen(3000);