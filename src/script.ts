import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
import UserService from './services/UserServices'
async function main() {
    const user2 = await prisma.user.create({
        data: {
            nome: "Caroline",
            email: "carloineexemplo@uvv.net"
        }
    })

    const leilao1 = await prisma.leilao.create({
        data: {
            idLeilao: "1",
            userId: "Marley",
            preco: 12.2,
            idProduto: "1"
        }
    })

    const lance1 = await prisma.lance.create({
        data: {
            idLance: "1",
            userId: "Caroline",
            leilaoId: "1",
            valor: 24.2
        }
    })
}
// Mandar as queries para o banco de dados
main()
    // O que fazer depois da promessa retornar (as queries serem enviadas)
    .then(async () => {
    await prisma.$disconnect()
    })
    // Catch para demonstrar o erro no console
    .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})