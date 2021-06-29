/* la direccion a la cual mandamos la peticion: http://localhost3000/saludo */
/* la peticion con nuestro dato .name , con query params (incluyendo los datos en la direccion) 
separando de la direccion ?
http://localhost3000/saludo?name=Alejandro */
const express = require ('express');
const app = express();
app.get('/saludo',function(req,res){  /*  */
    res.send(`Hola ${req.query.name}`); /* Usamos template strings, ya que soporta interpolacion con $. 
    Dentro de nuestro objeto req tenemos otro objeto de nombre query que tiene una propiedad por cada dato que recibe en la peiticion.
    en este caso la propiedad .name */
})

app.listen(3000);