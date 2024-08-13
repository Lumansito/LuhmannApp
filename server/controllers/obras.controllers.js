import {pool} from "../db.js";

export const getObras = async (req, res) => {
    try {
      const [result] = await pool.query("SELECT * FROM obra");
      
      if (result.length === 0) {
        return res.status(404).json({ message: "Obras sin cargar" });
      }else{
        res.json(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  export const getObraBynroObra = async (req, res) => {
    try{
      const [result] = await pool.query("SELECT * FROM obra WHERE nroObra = ?", [
        req.params.nroObra,
      ]);
      
      if (result.length === 0) {
        return res.status(404).json({ message: "Obra no encontrada" });
      }
      res.json(result);
  
    }catch(error){
      console.log(error);
    }
  };
  
  export const createObra = async (req, res) => {
    try {
      const { nombreObra, fechaInicio, fechaFin, ubicacion} = req.body;                                      
      const [result] = await pool.query(
        "INSERT INTO obra (nombreObra, fechaInicio, fechaFin, ubicacion) VALUES (?, ?, ?, ?)",
        [nombreObra, fechaInicio, fechaFin, ubicacion]
      );
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Error al crear obra" });
      }
      res.json({});
    } catch (error) {
      console.log(error);
    }
  };

  export const updateObra = async (req, res) => {
    try {
      const [result] = await pool.query("UPDATE obra SET ? WHERE nroObra = ?", [
        req.body,
        req.params.nroObra,
      ]);
      console.log(result);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Obra no encontrada" });
      }
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteObra = async (req, res) => {
    try {
      const [result] = await pool.query("DELETE FROM obra WHERE nroObra = ?", [
        req.params.nroObra,
        req.params.rol,
      ]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Obra no encontrada" });
      }
      return res.sendStatus(204);
    } catch (error) 
    {
      console.log(error);
    }
  };
  