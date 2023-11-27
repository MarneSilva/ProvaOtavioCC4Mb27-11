import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class LeilaoService {
    constructor(){

    }

    async listLance(lance?: string, idLeilao?: string){
        try{
            if(lance) {
                const lance1 = await prisma.leilao.findUnique({
                    where: {
                        idLeilao
                    }
                });
                return lance;
            } else {
                const lances = await prisma.user.findMany();
                return lances;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createLeilao(leilao: Prisma.LeilaoCreateInput){
        try{
            const newleilao = await prisma.leilao.create({
                data: leilao
            });
            return newleilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateLeilao(idLeilao: string, leilao: Prisma.LeilaoUpdateInput){
        try{
            const updatedLeilao = await prisma.leilao.update({
                where: {
                    idLeilao
                },
                data: leilao
            });

            return updatedLeilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteLeilao(idLeilao: string){
        try{
            const deletedLeilao = await prisma.leilao.delete({
                where: {
                    idLeilao
                }
            });

            return deletedLeilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LeilaoService();