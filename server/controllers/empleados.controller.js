import { pool } from "../db.js";

export const getEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM empleados");
    res.json(result);
    if (response.length === 0) {
      return res.status(404).json({ message: "Empleados sin cargar" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getEmpleado = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM empleados WHERE  id = ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const createEmpleado = async (req, res) => {
  try {
    const { nombre, apellido } = req.body;
    console.log(nombre, apellido);
    const [result] = await pool.query(
      "INSERT INTO empleados (nombre, apellido) VALUES (?, ?)",
      [nombre, apellido]
    );
    res.json({
      id: result.insertId,
      nombre: nombre,
      apellido: apellido,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateEmpleado = async (req, res) => {
  try {
    const [result] = await pool.query("UPDATE empleados SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    console.log(result);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmpleado = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM empleados WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};
