/*
  Warnings:

  - You are about to drop the `commentUserVote` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `linktUserVote` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "commentUserVote" DROP CONSTRAINT "commentUserVote_commentId_fkey";

-- DropForeignKey
ALTER TABLE "commentUserVote" DROP CONSTRAINT "commentUserVote_userId_fkey";

-- DropForeignKey
ALTER TABLE "linktUserVote" DROP CONSTRAINT "linktUserVote_linkId_fkey";

-- DropForeignKey
ALTER TABLE "linktUserVote" DROP CONSTRAINT "linktUserVote_userId_fkey";

-- DropTable
DROP TABLE "commentUserVote";

-- DropTable
DROP TABLE "linktUserVote";

-- CreateTable
CREATE TABLE "LinktUserVote" (
    "id" SERIAL NOT NULL,
    "linkId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LinktUserVote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommentUserVote" (
    "id" SERIAL NOT NULL,
    "commentId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CommentUserVote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LinktUserVote" ADD CONSTRAINT "LinktUserVote_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinktUserVote" ADD CONSTRAINT "LinktUserVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentUserVote" ADD CONSTRAINT "CommentUserVote_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentUserVote" ADD CONSTRAINT "CommentUserVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
