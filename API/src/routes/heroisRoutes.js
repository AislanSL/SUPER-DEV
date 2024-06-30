import express from "express";
import heroiController from "../controllers/heroiControllers.js";

const routes = express.Router();

routes.get("/", heroiController.listarHerois);
routes.post("/", heroiController.cadastrarHeroi);
routes.get("/:id", heroiController.listarHeroisPorId);
routes.put("/:id", heroiController.atualizarHeroi);
routes.delete("/:id", heroiController.deletarHeroi);

export default routes;