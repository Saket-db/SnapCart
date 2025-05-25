/*
  Warnings:

  - You are about to drop the column `additess` on the `Addresses` table. All the data in the column will be lost.
  - Added the required column `address` to the `Addresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Addresses" DROP COLUMN "additess",
ADD COLUMN     "address" TEXT NOT NULL;
