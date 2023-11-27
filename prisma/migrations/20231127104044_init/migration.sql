-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Leilao" (
    "idLeilao" TEXT NOT NULL PRIMARY KEY,
    "idProduto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "datalimite" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "lanceId" TEXT,
    CONSTRAINT "Leilao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Leilao" ("datalimite", "idLeilao", "idProduto", "lanceId", "preco", "userId") SELECT "datalimite", "idLeilao", "idProduto", "lanceId", "preco", "userId" FROM "Leilao";
DROP TABLE "Leilao";
ALTER TABLE "new_Leilao" RENAME TO "Leilao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
