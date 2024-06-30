import express from "express"; 
import cors from "cors";
import { createTable } from "./models/heroi.js";
import routes from "./routes/heroisRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

createTable();


app.listen(8000, () => console.log("Servidor Online"));