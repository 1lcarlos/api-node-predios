import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "carlos123",
  port: 3306,
  database: "modelo_oin",
});
