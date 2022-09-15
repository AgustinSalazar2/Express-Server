//Importamos los modulos:
const express = require('express');
const morgan = require('morgan');
const app = express();


//Puertos:
const port = 3000;


//Middlewares:
app.use(morgan('dev'));


//Iniciar el servidor:
app.listen(port, ()=> console.log(`Srvidor corriendo en http://localhost:${port}`)); 