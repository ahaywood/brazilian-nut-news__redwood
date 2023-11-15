/*
  Warnings:

  - You are about to drop the `LinktUserVote` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LinktUserVote" DROP CONSTRAINT "LinktUserVote_linkId_fkey";

-- DropForeignKey
ALTER TABLE "LinktUserVote" DROP CONSTRAINT "LinktUserVote_userId_fkey";

-- DropTable
DROP TABLE "LinktUserVote";

-- CreateTable
CREATE TABLE "LinkUserVote" (
    "id" SERIAL NOT NULL,
    "linkId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LinkUserVote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LinkUserVote" ADD CONSTRAINT "LinkUserVote_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkUserVote" ADD CONSTRAINT "LinkUserVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
