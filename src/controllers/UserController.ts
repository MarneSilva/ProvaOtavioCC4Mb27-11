import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UserService from "../services/UserServices";

class UserController{

    constructor(){}

    async createUser(req: Request, res: Response){
        const dados: Prisma.UserCreateInput = req.body;
        
        if(dados.email !== "" && dados.nome !== ""){
            const newuser = await UserService.createUser(dados)
            res.status(200).json({
                status: 'ok',
                newuser: newuser
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listUsers(req: Request, res: Response){
        const users = await UserService.listUsers()
        console.log(users);
        res.render('users', { users: users })
    }

    async updateUser(req: Request, res: Response){
        res.send('Update user');
    }

    async deleteUser(req: Request, res: Response){
        res.send('Delete user');
    }
}

export default new UserController;