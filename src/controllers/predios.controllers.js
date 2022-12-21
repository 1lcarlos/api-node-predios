import { pool } from "../db.js";

export const getPredios = (req, res) => res.send("obteniendo predio");
/* export const createPredios = (req, res) => {
    console.log(req.body);
    res.send('Post exitoso');
} */
export const createPredios = async (req, res) => {
  const {
    area_extr,
    descripcion,
    precio,
    url,
    latitud,
    longitud,
    unidad,
    valor_ha,
  } = req.body;

  const [rows] = await pool.query(
    "INSERT INTO predio VALUES (?,?,?,?,?,?,?,?)",
    [area_extr, descripcion, precio, url, latitud, longitud, unidad, valor_ha]
  );
  res.send(rows);
};

export const updatePredios = (req, res) => res.send("actualizando predio");
export const deletePredios = (req, res) => res.send("borrando predio");
