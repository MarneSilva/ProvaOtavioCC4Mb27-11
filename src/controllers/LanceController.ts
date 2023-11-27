import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceService from "../services/LanceServices";

class LanceController{

    constructor(){}

    async createLance(req: Request, res: Response){
        const dadosLance: Prisma.LanceCreateInput = req.body;
        
        if(dadosLance.idLance != ""){
            const newlance = await LanceService.createLance(dadosLance)
            res.status(200).json({
                status: 'ok',
                newlance: newlance
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async updateLance(req: Request, res: Response){
        res.send('Update lance');
    }

    async deleteLance(req: Request, res: Response){
        res.send('Delete lance');
    }
}

export default new LanceController;