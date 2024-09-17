/*
  Warnings:

  - Added the required column `voorstellingsDatum` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ticket` ADD COLUMN `voorstellingsDatum` DATETIME(3) NOT NULL;
