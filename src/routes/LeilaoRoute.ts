import LeilaoController from "../controllers/LeilaoController";
import { Router } from "express";

const LeilaoRouter = Router();

// LeilaoRouter.get('/lances', LeilaoController.listLance)

// LeilaoRouter.post('/leilao', LeilaoController.createLeilao);

// LeilaoRouter.put('/leilao', LeilaoController.updateLeilao);

// LeilaoRouter.delete('/leilao', LeilaoController.deleteLeilao);

LeilaoRouter.get('/leilao', LeilaoController.renderLeilaoPage);

export default LeilaoRouter;