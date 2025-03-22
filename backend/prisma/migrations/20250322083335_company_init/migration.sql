/*
  Warnings:

  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Company` table. All the data in the column will be lost.
  - The primary key for the `SocialLink` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `SocialLink` table. All the data in the column will be lost.
  - Made the column `uid` on table `Company` required. This step will fail if there are existing NULL values in that column.
  - The required column `uid` was added to the `SocialLink` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "SocialLink" DROP CONSTRAINT "SocialLink_companyId_fkey";

-- DropIndex
DROP INDEX "Company_uid_key";

-- AlterTable
ALTER TABLE "Company" DROP CONSTRAINT "Company_pkey",
DROP COLUMN "id",
ALTER COLUMN "uid" SET NOT NULL,
ADD CONSTRAINT "Company_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "SocialLink" DROP CONSTRAINT "SocialLink_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" TEXT NOT NULL,
ADD CONSTRAINT "SocialLink_pkey" PRIMARY KEY ("uid");

-- AddForeignKey
ALTER TABLE "SocialLink" ADD CONSTRAINT "SocialLink_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
