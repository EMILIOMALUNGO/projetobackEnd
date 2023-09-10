/*
  Warnings:

  - You are about to drop the column `create_at` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `usuarios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `create_at`,
    DROP COLUMN `update_at`,
    ADD COLUMN `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `Filmes` (
    `id` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `duracao` VARCHAR(191) NOT NULL,
    `release_data` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aluguel de Filmes` (
    `userId` VARCHAR(191) NOT NULL,
    `movieId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`, `movieId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Aluguel de Filmes` ADD CONSTRAINT `Aluguel de Filmes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluguel de Filmes` ADD CONSTRAINT `Aluguel de Filmes_movieId_fkey` FOREIGN KEY (`movieId`) REFERENCES `Filmes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
