import { pool } from "../db.js";

export const getPredios = async(req, res) => {
     const [rows] = await pool.query("SELECT * FROM predio");
     res.json(rows)
};

export const createPredios = async (req, res) => {
  const {
    area_extra,
    descripcion,
    precio,
    url,
    latitud,
    longitud,
    unidad,
    valor_ha
  } = req.body;

  const [rows] = await pool.query(
    "INSERT INTO predio (area_extra, descripcion, precio, url, latitud, longitud,unidad, valor_ha) VALUES (?,?,?,?,?,?,?,?)",
    [area_extra, descripcion, precio, url, latitud, longitud, unidad, valor_ha]
  );
  res.send({
    id: rows.insertId,
    area_extra,
    descripcion,
    precio,
    url,
    latitud,
    longitud,
    unidad,
    valor_ha
  });
};

export const updatePredios = (req, res) => res.send("actualizando predio");
export const deletePredios = (req, res) => res.send("borrando predio");
