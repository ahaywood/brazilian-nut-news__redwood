import type {
  QueryResolvers,
  MutationResolvers,
  CommentUserVoteRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const commentUserVotes: QueryResolvers['commentUserVotes'] = () => {
  return db.commentUserVote.findMany()
}

export const commentUserVote: QueryResolvers['commentUserVote'] = ({ id }) => {
  return db.commentUserVote.findUnique({
    where: { id },
  })
}

export const createCommentUserVote: MutationResolvers['createCommentUserVote'] =
  ({ input }) => {
    return db.commentUserVote.create({
      data: input,
    })
  }

export const updateCommentUserVote: MutationResolvers['updateCommentUserVote'] =
  ({ id, input }) => {
    return db.commentUserVote.update({
      data: input,
      where: { id },
    })
  }

export const deleteCommentUserVote: MutationResolvers['deleteCommentUserVote'] =
  ({ id }) => {
    return db.commentUserVote.delete({
      where: { id },
    })
  }

export const CommentUserVote: CommentUserVoteRelationResolvers = {
  comment: (_obj, { root }) => {
    return db.commentUserVote.findUnique({ where: { id: root?.id } }).comment()
  },
  user: (_obj, { root }) => {
    return db.commentUserVote.findUnique({ where: { id: root?.id } }).user()
  },
}
