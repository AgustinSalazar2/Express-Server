const express = require('express');
const app = express();

const port = 3000;

app.listen(port, ()=> console.log(`Srvidor corriendo en http://localhost:${port}`)); 