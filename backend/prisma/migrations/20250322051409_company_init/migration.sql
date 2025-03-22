/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ServiceProvider" AS ENUM ('yes', 'no');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "uid" TEXT,
    "username" TEXT,
    "email" TEXT NOT NULL,
    "secondaryEmail" TEXT,
    "password" TEXT,
    "bio" TEXT,
    "vision" TEXT,
    "mobile" TEXT,
    "secondaryMobile" TEXT,
    "website" TEXT,
    "teamSize" TEXT,
    "establishmentDate" TIMESTAMP(3),
    "serviceProvider" "ServiceProvider" NOT NULL,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "pinCode" TEXT,
    "industryType" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "organizationType" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "logo" TEXT,
    "banner" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialLink" (
    "id" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "SocialLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_uid_key" ON "Company"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "Company_username_key" ON "Company"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Company_email_key" ON "Company"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Company_secondaryEmail_key" ON "Company"("secondaryEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Company_mobile_key" ON "Company"("mobile");

-- AddForeignKey
ALTER TABLE "SocialLink" ADD CONSTRAINT "SocialLink_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
