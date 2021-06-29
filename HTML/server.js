/* enviar HTML */
const express = require ('express');

const app = express();

app.get('/', function(req, res){ /* definimos la ruta inicia; que va a responder con un documento html */
    res.sendFile('index.html',{ /* nuestra funcion respondera a la peticion con un archivo html */
        root: __dirname         /* utilizamos root: ___dirname para decirle al servidor donde esta el archivo. 
        Con ___dirname/express no tenemos que establecer la ruta absoluta y somos libres de mover el proyecto a donde queramos sin tener que modificar el codigo*/
    });
});

app.listen(3000);