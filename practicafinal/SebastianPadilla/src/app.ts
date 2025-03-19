import express from 'express';
import dotenv from 'dotenv';
import userRoutes from "./routes/book.routes";
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
    origin: '*',
}));

app.use(express.json());

app.use("/api", userRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});