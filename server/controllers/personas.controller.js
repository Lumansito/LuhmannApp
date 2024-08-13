import { pool } from "../db.js";


export const getDueños = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM persona WHERE rol = 'dueño'");
    
    if (result.length === 0) {
      return res.status(404).json({ message: "Dueños sin cargar" });
    }else{
      res.json(result);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM persona WHERE  rol = 'empleado'", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Empleados sin cargar" });
    }
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const getArquitectos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM persona WHERE rol = 'arquitecto'", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Arquitectos sin cargar" });
    }
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const getPersonaByDniRol = async (req, res) => {
  try{
    const [result] = await pool.query("SELECT * FROM persona WHERE dni = ? and rol = ?", [
      req.params.dni,
      req.params.rol,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }
    res.json(result);

  }catch(error){
    console.log(error);
  }
};

export const getArquitectosByObra = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select p.nombre, p.apellido, p.dni, a_o.funcionArquitecto, p.rol from persona p inner join arquitecto_obra a_o on p.dni = a_o.dniArquitecto and p.rol = a_o.rolArquitecto inner join obra o on o.nroObra = a_o.nroObra where o.nroObra = ?",
      [req.params.nroObra]
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "No se encontraron arquitectos para esa obra" });
    }
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}

export const getDueñosByObra = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select p.nombre, p.apellido, p.dni, p.rol from persona p inner join dueño_obra d_o on p.dni = d_o.dniDueño and p.rol = d_o.rolDueño inner join obra o on o.nroObra = d_o.nroObra where o.nroObra = ?",
      [req.params.nroObra]
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "No se encontraron arquitectos para esa obra" });
    }
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}

export const createPersona = async (req, res) => {
  try {
    const { nombre, apellido, email, telefono, rol, dni } = req.body;
    const [result] = await pool.query(
      "INSERT INTO persona (nombre, apellido, email, telefono, rol, dni) VALUES (?, ?, ?, ?, ?, ?)",
      [nombre, apellido, email, telefono, rol, dni]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Error al crear persona" });
    }
    res.json({});
  } catch (error) {
    console.log(error);
  }
};

export const updatePersona = async (req, res) => {
  try {
    const [result] = await pool.query("UPDATE persona SET ? WHERE dni = ? and rol = ?", [
      req.body,
      req.params.dni,
      req.params.rol,
    ]);
    console.log(result);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const deletePersona = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM persona WHERE dni = ? and rol = ?", [
      req.params.dni,
      req.params.rol,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }
    return res.sendStatus(204);
  } catch (error) 
  {
    console.log(error);
  }
};
