import express from "express";
import prediosRoutes from "./routes/predios.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());
app.use(prediosRoutes);
app.use(indexRoutes);

app.listen(3000);
console.log("Server ejecutandose en puerto 3000");
