import { db } from "../db/conexion.js";

const getPersonas = async (req, res) => {
    const sql = "select * from tb_personas";
    const result = await db.query(sql);

    return res.json(result);
}


const postPersonas = async (req, res) => {
    const { nombre,apellido,fecha } = req.body;
    const data = [nombre,apellido,fecha]

    const sql = `insert into tb_personas 
                 (nombre,apellido,fecha)
                  values
                  ($1,$2,$3) returning *`

     const result =await db.query(sql,data)             

    return res.json({ mensaje: "Insercion Exitosa",obj_creado: result });
}


const putPersona = async (req, res)=>{

    const {id} = req.params;
    const {nombre,apellido,fecha} = req.body;
    const data = [nombre,apellido,fecha,id];

    const sql = `update tb_personas
                 set nombre = $1,
                 apellido = $2,
                 fecha = $3
                 where id = $4
                 returning * `;
    
    const result = await db.query(sql,data);             

    return res.json({mensaje : "Actualizacion Exitosa", obj_Modificado: result});
 
}

const deletePersona = async (req, res) => {

    const { id } = req.params;

    const sql = `delete from tb_personas where id = $1 returning *`;
    const data = [id];
    const result = await db.query(sql,data);
    
    return res.json({ menseje: "Borrado Exitoso" , Obj_borrado: result});

}

export {
    getPersonas, 
    postPersonas, 
    putPersona, 
    deletePersona
}