const express = require('express');
const app = express();

// app.get("/", (req, res) => {
//     const nombre = req.query.nombre;

//     if (nombre === "" || nombre === undefined) {
//         res.send(`<h1>Hola desconocido!</h1>`)
//     } else {
//         res.send(`<h1>Hola ${nombre}!</h1>`)
//     }
// });

app.get("/makers/:nombre", (req, res) => {
    const nombre = req.params.nombre

    capitalizeFirstLetter = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }
    if (nombre === "" || nombre === undefined) {
        res.send(`<h1>Hola desconocido!</h1>`)
    } else {
        res.send(`<h1>Hola ${capitalizeFirstLetter(nombre)}!</h1>`)
    }
}); 

app.listen(3000, ()=> console.log("Listening on port 3000"));