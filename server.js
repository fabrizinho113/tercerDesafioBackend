const express = require("express");
const Contenedor = require('./Contenedor');

let container = new Contenedor('./productos.txt');

const app = express();

const PORT = 8080;

app.listen(PORT, () => console.log(`Se levanto el server pa, en el ${PORT}`));

//Rutas - Endpoints

//Ruta para obtener mensaje

app.get("/",(request,response) => {
    response.send("<h1 style='color:blue'>Bienvenido/a</h1>");
})

app.get("/productos", async(request, response) => {
    response.send(await container.getAll());
})

app.get("/productoRandom", async(request, response) => {
    response.send(await container.getRandom());
})