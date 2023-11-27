import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class UserService {
    constructor(){

    }

    async listUsers(){
        try{
            const users = await prisma.user.findMany();
            return users;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createUser(user: Prisma.UserCreateInput){
        try{
            const newuser = await prisma.user.create({
                data: user
            });
            return newuser;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateUser(nome: string, user: Prisma.UserUpdateInput){
        try{
            const updatedUser = await prisma.user.update({
                where: {
                    nome
                },
                data: user
            });

            return updatedUser;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteUser(nome: string){
        try{
            const deletedUser = await prisma.user.delete({
                where: {
                    nome
                }
            });

            return deletedUser;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new UserService();