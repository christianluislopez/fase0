import peliculaRepository from "../repositories/pelicula.repository.js";

class peliculaService {
  async getPeliculas() {
    return await peliculaRepository.getAll();
  }

  async getPelicula(id) {
    const pelicula = await peliculaRepository.getById(id);
    if (!pelicula) {
      throw new Error('pelicula no encontrada');
    }
    return pelicula;
  }

  async createPelicula(titulo, autor, idioma, correo, numero) {
    return await peliculaRepository.create(titulo, autor, idioma, correo, numero);
  }

  async deletePelicula(id) {
    const rowCount = await peliculaRepository.delete(id);
    if (rowCount === 0) {
      throw new Error('pelicula no encontrada');
    }
  }

  async updatePelicula(id, titulo, autor, idioma, correo, numero) {
    const pelicula = await peliculaRepository.update(id, titulo, autor, idioma, correo, numero);
    if (!pelicula) {
      throw new Error('pelicula no encontrada');
    }
    return pelicula;
  }
}

export default new peliculaService();
