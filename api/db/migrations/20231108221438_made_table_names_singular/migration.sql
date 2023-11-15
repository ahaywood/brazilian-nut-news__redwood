/*
  Warnings:

  - You are about to drop the `commentUserVotes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `linktUserVotes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "commentUserVotes" DROP CONSTRAINT "commentUserVotes_commentId_fkey";

-- DropForeignKey
ALTER TABLE "commentUserVotes" DROP CONSTRAINT "commentUserVotes_userId_fkey";

-- DropForeignKey
ALTER TABLE "linktUserVotes" DROP CONSTRAINT "linktUserVotes_linkId_fkey";

-- DropForeignKey
ALTER TABLE "linktUserVotes" DROP CONSTRAINT "linktUserVotes_userId_fkey";

-- DropTable
DROP TABLE "commentUserVotes";

-- DropTable
DROP TABLE "linktUserVotes";

-- CreateTable
CREATE TABLE "linktUserVote" (
    "id" SERIAL NOT NULL,
    "linkId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "linktUserVote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "commentUserVote" (
    "id" SERIAL NOT NULL,
    "commentId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "commentUserVote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "linktUserVote" ADD CONSTRAINT "linktUserVote_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "linktUserVote" ADD CONSTRAINT "linktUserVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentUserVote" ADD CONSTRAINT "commentUserVote_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentUserVote" ADD CONSTRAINT "commentUserVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
