import express from `express`;
const Telefonos = express();
import { getTelefonos,
    postTelefonos,
    putTelefonos,
    deleteTelefonos } from "../controllers/controllerTelefonos.js";

//selecionando informacion
Telefonos.get('/',getTelefonos);

//creando informacion 
Telefonos.post('/',postTelefonos);

//acctualizacion de informacion
Telefonos.put('/',putTelefonos);

//eliminacion de datos
Telefonos.delete('/',deleteTelefonos);

export{
    Telefonos
}