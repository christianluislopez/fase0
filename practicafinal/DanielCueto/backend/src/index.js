import express from "express";
import { PORT } from "./config/config.js";
import morgan from 'morgan';
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

import peliculaRoutes from "./routes/pelicula.routes.js"
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(peliculaRoutes);


app.get('/', (req, res) => {
    res.send('hola mundo')
});


app.listen(PORT, () => {
  console.log(`corriendo en el puerto ${PORT}`)
})