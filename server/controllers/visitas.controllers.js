import { pool } from "../db";

export const getVisitaByObra = async (req, res) => {
    try{
      const [result] = await pool.query("SELECT * FROM visita WHERE nroObra = ?", [
        req.params.nroObra,
      ]);
      
      if (result.length === 0) {
        return res.status(404).json({ message: "No hay visitas cargadas para esa obra" });
      }
      res.json(result);
  
    }catch(error){
      console.log(error);
    }
  };

export const getVisitaById = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM visita WHERE idVisita = ?", [
        req.params.idVisita,
        ]);
        
        if (result.length === 0) {
        return res.status(404).json({ message: "Visita no encontrada" });
        }
        res.json(result);

    }catch(error){
        console.log(error);
    }
};

export const createVisita = async (req, res) => { 
    try{  
      const { fecha, horaInicio, horaFin, titulo, nroObra, descripcion} = req.body;      
      
      const [contar] = await pool.query("SELECT COUNT(*) FROM visita WHERE nroObra = ? ", [nroObra]);
      let nroVisita = contar[0]["COUNT(*)"] + 1;
        const [result] = await pool.query(
          "INSERT INTO visita (fecha, horaInicio, horaFin,titulo, nroObra, descripcion, nroVisita) VALUES (?, ?, ?, ?, ?, ?)",
          [fecha, horaInicio,horaFin,titulo, nroObra,descripcion, nroVisita]
      );
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Error al crear visita" });
      }
      res.json({});
    }catch(error){
      console.log(error);
    }
}
