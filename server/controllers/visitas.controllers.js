import { pool } from "../db.js";


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



/*
DATOS PARA GENERAR VISITA
{
  "empleados_visitas": [
    { 
      "idEmpleado": 1,
      "observaciones": "observaciones"
    },
    {
      "idEmpleado": 2,
      "observaciones": "observaciones"
    }
  ],
  "presente_visita": [
  {
    "nomPresente": "lucas",
    "apellPresente": "Gomez",
    "telPresente": "123456",
    "rolPresente": "albañil"
  },
  {
  "nomPresente": "maria",
  "apellPresente": "Gomez",
  "telPresente": "1232456",
  "rolPresente": "arq"
  }]
  ,
  "fecha": "2024-02-10",
  "horaInicio": "16:50",
  "horaFin": "18:30",
  "titulo": "Prueba",
  "nroObra": 1,
  "descripcion": "hola"
}
 */



export const createVisita = async (req, res) => { 
     
  const { fecha, horaInicio, horaFin, titulo, nroObra, descripcion , empleados_visitas, presente_visita} = req.body;      
  
  const [contar] = await pool.query("SELECT COUNT(*) FROM visita WHERE nroObra = ? ", [nroObra]);
  const [idPrevio] = await pool.query("SELECT MAX(idVisita) FROM visita");
  const idActual = idPrevio[0]["MAX(idVisita)"]   ;
  let nroVisita = contar[0]["COUNT(*)"] + 1;
  
  const queryVisita = `INSERT INTO visita (fecha, horaInicio, horaFin, titulo, nroObra, descripcion, nroVisita) VALUES ('${fecha}', '${horaInicio}', '${horaFin}', '${titulo}', ${nroObra}, '${descripcion}', ${nroVisita})`
  
  let valuesStringEmp = empleados_visitas.map(pair => `(${idActual},${pair.idEmpleado},"empleado", "${pair.observaciones}")`).join(', ');
  const queryEmpleado = `INSERT INTO empleado_visita (idVisita,dniEmpleado, rolEmpleado, observaciones) VALUES ${valuesStringEmp}`;
  
  let valuesStringPres = presente_visita.map(pair => 
    `(${idActual}, '${pair.nomPresente}', '${pair.apellPresente}', '${pair.telPresente}', '${pair.rolPresente}')`
).join(', ');
  const queryPresente = `INSERT INTO presente_visita (idVisita, nombrePresente , apellidoPresente, telefono, rolPresente) VALUES ${valuesStringPres}`;

  console.log(queryPresente);
  let connection;
  try { 
      //generamos una transaccion para que se hagan todas las operaciones o ninguna para evitar inconsistencias
    connection = await pool.getConnection();
    await connection.beginTransaction();
    
    await connection.query(queryVisita);
    await connection.query(queryEmpleado);
    await connection.query(queryPresente);

    await connection.commit();
    res.json({ message: "Se creo la visita con sus dependencias correctamente." });
  } catch (error) {
    if (connection) await connection.rollback();
    res.status(500).json({ message: error.message });
  } finally {
    if (connection) connection.release();
  }
}

