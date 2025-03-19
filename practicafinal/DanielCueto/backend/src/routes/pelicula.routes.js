import { Router } from "express";
import peliculaController from "../controllers/pelicula.controller.js";

const router = Router();

router.get('/peliculas', peliculaController.getPeliculas);
router.get('/pelicula/:id', peliculaController.getPelicula);
router.post('/peliculas', peliculaController.createPelicula);
router.delete('/peliculas/:id', peliculaController.deletePelicula);
router.put('/peliculas/:id', peliculaController.updatePelicula);

export default router;
