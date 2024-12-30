import { pool } from "../db.js";

export const getPersonas = async (req, res,next) => {
  try{
    const [result] = await pool.query("SELECT * FROM persona");

  if (result.length === 0) {
    res.status(404).json({ message: "Dueños sin cargar" });
    return;
  }
  res.json(result);
  }
  catch(err){
    next(err);
  }
  
};

export const getPersonaByDni = async (req, res ) => {
    const [result] = await pool.query(
      "SELECT * FROM persona WHERE dni = ? ",
      [req.params.dni]
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }
    res.json(result);
};


export const createPersona = async (req, res) => {
    const { nombre, apellido, email, telefono, dni } = req.body;
    const [result] = await pool.query(
      "INSERT INTO persona (nombre, apellido, email, telefono,  dni) VALUES (?, ?, ?, ?, ?)",
      [nombre, apellido, email, telefono, rol, dni]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Error al crear persona" });
    }
    res.json({});
};

export const updatePersona = async (req, res) => {
    const [result] = await pool.query(
      "UPDATE persona SET ? WHERE dni = ? ",
      [req.body, req.params.dni]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }
    res.json(result);
};

export const deletePersona = async (req, res) => {
    const [result] = await pool.query("DELETE FROM persona WHERE dni = ? ", [
      req.params.dni,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }
    return res.sendStatus(204);
};



/*
export const getArquitectosByObra = async (req, res) => {
  const [result] = await pool.query(
      "select p.nombre, p.apellido, p.dni, a_o.funcionArquitecto, p.rol from persona p inner join arquitecto_obra a_o on p.dni = a_o.dniArquitecto and p.rol = a_o.rolArquitecto inner join obra o on o.nroObra = a_o.nroObra where o.nroObra = ?",
      [req.params.nroObra]
    );
    if (result.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron arquitectos para esa obra" });
    }
    res.json(result);
};

export const getDueñosByObra = async (req, res) => {
    const [result] = await pool.query(
      "select p.nombre, p.apellido, p.dni, p.rol from persona p inner join dueño_obra d_o on p.dni = d_o.dniDueño and p.rol = d_o.rolDueño inner join obra o on o.nroObra = d_o.nroObra where o.nroObra = ?",
      [req.params.nroObra]
    );
    if (result.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron arquitectos para esa obra" });
    }
    res.json(result);
};


 */