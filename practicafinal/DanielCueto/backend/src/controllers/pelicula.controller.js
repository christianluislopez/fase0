import peliculaService from "../services/pelicula.service.js";

class peliculaController {
  async getPeliculas(req, res) {
    try {
      const peliculas = await peliculaService.getPeliculas();
      res.json(peliculas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getPelicula(req, res) {
    try {
      const { id } = req.params;
      const pelicula = await peliculaService.getPelicula(id);
      res.json(pelicula);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async createPelicula(req, res) {
    try {
      const { titulo, autor, idioma, correo, numero } = req.body;
      const pelicula = await peliculaService.createPelicula(titulo, autor, idioma, correo, numero);
      res.status(201).json(pelicula);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deletePelicula(req, res) {
    try {
      const { id } = req.params;
      await peliculaService.deletePelicula(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async updatePelicula(req, res) {
    try {
      const { id } = req.params;
      const { titulo, autor, idioma, correo, numero } = req.body;
      const pelicula = await peliculaService.updatePelicula(id, titulo, autor, idioma, correo, numero);
      res.json(pelicula);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new peliculaController();
