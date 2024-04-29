import { db } from "../db/conexion.js";


const getTelefonos = async (req, res) => {

    const sql = `select * from tb_telefono`;
    const result = await db.query(sql);

    return res.json(result);

}

const postTelefonos = async (req, res) => {

    const { numero_telefono, id_personas } = req.body;

    const data = [numero_telefono, id_personas]

    const sql = ` insert into tb_telefono 
                 ( numero_telefono, id_personas)
                 values 
                 ($1, $2) returning  *`;

    const result = await db.query(sql, data)

    return res.json({ mensaje: "Insercion Exitosa", obj_creado: result })
}

const putTelefonos = async (req, res) => {

    const { id } = req.params;
    const { numero_telefono, id_personas } = req.body;
    const data = [numero_telefono, id_personas,id];

    const sql = ` update tb_telefono 
                    set numero_telefono = $1, 
                    id_personas = $2
                    where id = $3 
                    returning * `;

    const result = await db.query(sql, data);

    return res.json({ mensaje: "Actualizacion Exitosa", obj_modificado: result })
}

const deleteTelefonos = async (req, res) => {

    const { id } = req.params;
    const sql = `delete from tb_telefono where id = $1 returning * `;
    const data = [id];
    const result = await db.query(sql, data);

    return res.json({ menseje: "Borrado Exitoso", obj_borrado: result });

}

export {
    getTelefonos,
    postTelefonos,
    putTelefonos,
    deleteTelefonos
}