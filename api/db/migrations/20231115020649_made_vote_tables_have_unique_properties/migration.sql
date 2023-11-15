/*
  Warnings:

  - A unique constraint covering the columns `[commentId,userId]` on the table `CommentUserVote` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[linkId,userId]` on the table `FavoriteLinkUser` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[linkId,userId]` on the table `LinkUserVote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CommentUserVote_commentId_userId_key" ON "CommentUserVote"("commentId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteLinkUser_linkId_userId_key" ON "FavoriteLinkUser"("linkId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "LinkUserVote_linkId_userId_key" ON "LinkUserVote"("linkId", "userId");
