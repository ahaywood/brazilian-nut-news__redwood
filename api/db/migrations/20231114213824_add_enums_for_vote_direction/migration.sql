/*
  Warnings:

  - Added the required column `voteDirection` to the `CommentUserVote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `direction` to the `LinkUserVote` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "VoteDirection" AS ENUM ('UP', 'DOWN');

-- AlterTable
ALTER TABLE "CommentUserVote" ADD COLUMN     "voteDirection" "VoteDirection" NOT NULL;

-- AlterTable
ALTER TABLE "LinkUserVote" ADD COLUMN     "direction" "VoteDirection" NOT NULL;
