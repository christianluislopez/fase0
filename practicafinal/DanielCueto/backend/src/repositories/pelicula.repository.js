import { pool } from "../config/db.js";

class peliculaRepository {
  async getAll() {
    const { rows } = await pool.query('SELECT * FROM pelicula');
    return rows;
  }

  async getById(id) {
    const { rows } = await pool.query('SELECT * FROM pelicula WHERE id = $1', [id]);
    return rows[0];  // Si no se encuentra, retornará undefined
  }

  async create(titulo, autor, idioma, correo, numero) {
    const result = await pool.query('INSERT INTO pelicula(titulo, autor, idioma, correo, numero) VALUES ($1, $2, $3, $4, $5) RETURNING *', [titulo, autor, idioma, correo, numero]);
    return result.rows[0];
  }

  async delete(id) {
    const { rowCount } = await pool.query('DELETE FROM pelicula WHERE id = $1', [id]);
    return rowCount;  // 0 si no se encuentra la pelicula
  }

  async update(id, titulo, autor, idioma, correo, numero) {
    const result = await pool.query('UPDATE pelicula SET titulo = $1, autor = $2, idoma = $3, correo = $4, numero = $5 WHERE id = $3 RETURNING *', [titulo, autor, idioma, correo, numero, id]);
    return result.rows[0];  // Devuelve la pelicula actualizada
  }
}

export default new peliculaRepository();
