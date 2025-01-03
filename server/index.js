import express from "express";
import { PORT } from "./config.js";
import cors from "cors";

//import obrasRoutes from "./routes/obras.routes.js";
import personasRoutes from "./routes/personas.routes.js";
//import visitasRoutes from "./routes/visitas.routes.js"

import manejoErroresGlobal from "./middleware/manejoErroresGlobal.js";

const app = express();

app.use(express.json()); 


app.use(cors()); //permite q el servidor pueda recibir peticiones de otros servidores


app.use(personasRoutes);
//app.use(obrasRoutes);
//app.use(visitasRoutes);

app.use(manejoErroresGlobal);


app.listen(PORT, () => {
  console.log(`running in port ${PORT}`);
});
