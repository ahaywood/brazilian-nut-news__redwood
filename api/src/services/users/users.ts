import type {
  QueryResolvers,
  MutationResolvers,
  UserRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const userByNickname: QueryResolvers['userByNickname'] = ({
  nickname,
}) => {
  return db.user.findUnique({
    where: { nickname },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User: UserRelationResolvers = {
  links: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).links()
  },
  comments: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).comments()
  },
  favorites: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).favorites()
  },
  commentVotes: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).commentVotes()
  },
  linkVotes: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).linkVotes()
  },
  totalVotesOnLinks: async (_obj, { root }) => {
    const links = await db.link.findMany({
      where: { submittedById: root?.id },
      include: { linkUserVotes: true }, // Include linkUserVotes in the initial query
    })

    // then evaluate the vote count for each link
    const linksWithVoteCounts = links.reduce((sum, link) => {
      const count = link.linkUserVotes.reduce((acc, vote) => {
        // the user can't vote on their own link
        if (vote.userId === root?.id) {
          return acc
        }

        if (vote.direction === 'UP') {
          return acc + 1
        } else if (vote.direction === 'DOWN') {
          return acc - 1
        } else {
          return acc
        }
      }, 0)
      return sum + count
    }, 0)

    return linksWithVoteCounts
  },
}
