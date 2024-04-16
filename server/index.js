import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";

const app = express();

app.use(express.json()); //permite procesar datos q vienen del cliente en formato json
app.use(cors()); //permite q el servidor pueda recibir peticiones de otros servidores
app.use(indexRoutes);
app.use(empleadosRoutes);

app.listen(PORT, () => {
  console.log(`running in port ${PORT}`);
});
