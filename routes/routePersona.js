//const express = require('express');
import express from 'express';
const persona = express();
import { getPersonas, 
         postPersonas, 
         putPersona, 
         deletePersona } from '../controllers/controllerPersonas.js'; 

// Seleccionar Personas 

persona.get('/', getPersonas);

// creacion de personas 

persona.post('/', postPersonas);

// Actualizacion de Persona

persona.put('/:id', putPersona);


persona.delete('/:id', deletePersona );

export {
    persona
}