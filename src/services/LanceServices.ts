import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class LanceService {
    constructor(){

    }

    async createLance(lance: Prisma.LanceCreateInput){
        try{
            const newlance = await prisma.lance.create({
                data: lance
            });
            return newlance;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateLance(idLance: string, lance: Prisma.LanceUpdateInput){
        try{
            const updatedLance = await prisma.lance.update({
                where: {
                    idLance
                },
                data: lance
            });

            return updatedLance;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteLance(idLance: string){
        try{
            const deletedLance = await prisma.lance.delete({
                where: {
                    idLance
                }
            });

            return deletedLance;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LanceService();