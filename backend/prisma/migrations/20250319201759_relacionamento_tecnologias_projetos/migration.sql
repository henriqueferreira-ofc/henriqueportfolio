-- CreateTable
CREATE TABLE "_ProjetoToTecnologia" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjetoToTecnologia_AB_unique" ON "_ProjetoToTecnologia"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjetoToTecnologia_B_index" ON "_ProjetoToTecnologia"("B");

-- AddForeignKey
ALTER TABLE "_ProjetoToTecnologia" ADD CONSTRAINT "_ProjetoToTecnologia_A_fkey" FOREIGN KEY ("A") REFERENCES "projetos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjetoToTecnologia" ADD CONSTRAINT "_ProjetoToTecnologia_B_fkey" FOREIGN KEY ("B") REFERENCES "tecnologias"("id") ON DELETE CASCADE ON UPDATE CASCADE;
