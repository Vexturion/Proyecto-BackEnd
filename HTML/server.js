/* Cookies */
const express = require ('express');
const cookieSession = require('cookie-session'); /* importamos nuestra libreria cookie-session, dicha libreria tambien es un middleware que encriptara las cookies */
const app = express();

/* Para pedirle a exprees que use cookies session tenemos que pasar el resultado de usar la libreria 
lo importamos como funcion al metodo use del objeto app*/
app.use(cookieSession({ /* enviamos un on=bjeto JSON de configuracion de la cookie */
    name: 'session', /* el valor por defecto del nombre de la cookie sera session, podemos usar el que queramos */
    keys: ['ashiqur56184g','aghqtu61836bcjuqiol'], /* las keys o claves se utilizan para firmar las cookies */
    maxAge: 180000, /* adicionalmente podemos agregar maxAge al igual que el cache y la variable expires para ponerle una 'fecha de caducidad' a nuestra cookie */
    expires: 01/07/2021
}))

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets',{
etag: false, 
maxAge: 180000
}));

app.get('/', function(req, res){ 
    res.render('index');              
});

app.get('/cookie', function(req,res){
    req.session.visits = req.session.visits || 0;
    req.session.visits = req.session.visits + 1;
    res.send(`Has visitado la pagina: ${req.session.visits} veces`)
})

app.listen(3000);