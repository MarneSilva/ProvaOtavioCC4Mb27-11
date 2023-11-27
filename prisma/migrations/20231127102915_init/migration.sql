-- CreateTable
CREATE TABLE "User" (
    "nome" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lance" (
    "idLance" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "leilaoId" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    CONSTRAINT "Lance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_leilaoId_fkey" FOREIGN KEY ("leilaoId") REFERENCES "Leilao" ("idLeilao") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Leilao" (
    "idLeilao" TEXT NOT NULL PRIMARY KEY,
    "idProduto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "datalimite" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "lanceId" TEXT NOT NULL,
    CONSTRAINT "Leilao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);
