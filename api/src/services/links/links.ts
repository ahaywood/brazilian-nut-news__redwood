import type {
  QueryResolvers,
  MutationResolvers,
  LinkRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const links: QueryResolvers['links'] = () => {
  return db.link.findMany()
}

const LINKS_PER_PAGE = 50

export const linksByVote: QueryResolvers['linksByVote'] = async ({
  page = 1,
}) => {
  const offset = (page - 1) * LINKS_PER_PAGE

  // get the latest links - based on date
  const links = await db.link.findMany({
    take: LINKS_PER_PAGE,
    skip: offset,
    orderBy: { createdAt: 'desc' },
    include: { linkUserVotes: true },
  })

  // then evaluate the vote count for each link
  const linksWithVoteCounts = links.map((link) => {
    const count = link.linkUserVotes.reduce((acc, vote) => {
      if (vote.direction === 'UP') {
        return acc + 1
      } else if (vote.direction === 'DOWN') {
        return acc - 1
      } else {
        return acc
      }
    }, 0)
    return { ...link, voteCount: count }
  })

  return linksWithVoteCounts.sort((a, b) => b.voteCount - a.voteCount)
}

// most recent first
export const linksByRecent: QueryResolvers['links'] = () => {
  return db.link.findMany({ orderBy: { createdAt: 'desc' } })
}

export const link: QueryResolvers['link'] = ({ id }) => {
  return db.link.findUnique({
    where: { id },
  })
}

export const createLink: MutationResolvers['createLink'] = ({ input }) => {
  return db.link.create({
    data: input,
  })
}

export const updateLink: MutationResolvers['updateLink'] = ({ id, input }) => {
  return db.link.update({
    data: input,
    where: { id },
  })
}

export const deleteLink: MutationResolvers['deleteLink'] = ({ id }) => {
  return db.link.delete({
    where: { id },
  })
}

export const Link: LinkRelationResolvers = {
  submittedBy: (_obj, { root }) => {
    return db.link.findUnique({ where: { id: root?.id } }).submittedBy()
  },
  comments: (_obj, { root }) => {
    return db.link.findUnique({ where: { id: root?.id } }).comments()
  },
  countComments: async (_obj, { root }) => {
    const numComments = await db.comment.count({
      where: { linkId: root?.id },
    })
    return numComments
  },
  favorite: (_obj, { root }) => {
    return db.link.findUnique({ where: { id: root?.id } }).favorite()
  },
  linkUserVotes: (_obj, { root }) => {
    return db.link.findUnique({ where: { id: root?.id } }).linkUserVotes()
  },
  currentUserFavorite: async (_obj, { root }) => {
    const favorite = await db.favoriteLinkUser.findFirst({
      where: {
        linkId: root?.id,
        userId: context.currentUser?.id,
      },
    })
    return !!favorite
  },
  countFavorites: async (_obj, { root }) => {
    const numFavorites = await db.favoriteLinkUser.count({
      where: { linkId: root?.id },
    })
    return numFavorites
  },
  countVotes: async (_obj, { root }) => {
    const upVotes = await db.linkUserVote.count({
      where: {
        linkId: root?.id,
        direction: 'UP',
      },
    })

    const downVotes = await db.linkUserVote.count({
      where: {
        linkId: root?.id,
        direction: 'DOWN',
      },
    })

    return upVotes - downVotes
  },
  currentUserVote: async (_obj, { root }) => {
    const vote = await db.linkUserVote.findFirst({
      where: {
        linkId: root?.id,
        userId: context.currentUser?.id,
      },
    })
    return vote?.direction
  },
}
