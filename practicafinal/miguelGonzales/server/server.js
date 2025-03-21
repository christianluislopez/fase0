import express from "express";
import cors from "cors";
import books from "./routes/record.js";

const PORT = process.env.PORT || 5050;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
