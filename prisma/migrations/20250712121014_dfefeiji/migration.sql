/*
  Warnings:

  - Made the column `updatedAt` on table `issue` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `issue` MODIFY `updatedAt` DATETIME(3) NOT NULL;
