import type {
  QueryResolvers,
  MutationResolvers,
  CommentRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const comments: QueryResolvers['comments'] = () => {
  return db.comment.findMany()
}

export const comment: QueryResolvers['comment'] = ({ id }) => {
  return db.comment.findUnique({
    where: { id },
  })
}

export const createComment: MutationResolvers['createComment'] = ({
  input,
}) => {
  return db.comment.create({
    data: input,
  })
}

export const updateComment: MutationResolvers['updateComment'] = ({
  id,
  input,
}) => {
  return db.comment.update({
    data: input,
    where: { id },
  })
}

export const deleteComment: MutationResolvers['deleteComment'] = ({ id }) => {
  return db.comment.delete({
    where: { id },
  })
}

export const Comment: CommentRelationResolvers = {
  link: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).link()
  },
  author: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).author()
  },
  parentComment: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).parentComment()
  },
  childComments: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).childComments()
  },
  votes: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).votes()
  },
}
