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

