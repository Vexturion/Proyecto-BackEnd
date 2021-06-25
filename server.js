const http = require ('http'); /* Mandamos a llamar la libreria http */

function responderPeticion(request, response){ /* Esta es la funcion que pasaremos al metodo, recibira dos argumentos: la peticion y la respuesta */
    response.end('Hola Mundo'); /* Cerramos la conexion */
}

let server = http.createServer(responderPeticion); /* A nuestro metodo create.Server debemos proveerle una funcion, que ejecutara cuando reciba una peticion del cliente */

server.listen(3000); /* Para que nuestro servidor pueda recibir solicitudes deberemos ponerlo "a la escucha" y señalar el puerto que debera usar */