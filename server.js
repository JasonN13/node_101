//const express = require('express');
import express from 'express';
const app = express();
import { persona } from './routes/routePersona.js';
import { animal } from './routes/routeAnimal.js';
import { Telefonos } from './routes/routeTelefonos.js';
// MiddleWare

app.use(express.json());

app.use('/personas', persona);
app.use('/animal', animal)
app.use('/telefonos',Telefonos)


app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000")
});