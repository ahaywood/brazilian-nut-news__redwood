import type {
  QueryResolvers,
  MutationResolvers,
  FavoriteLinkUserRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const favoriteLinkUsers: QueryResolvers['favoriteLinkUsers'] = () => {
  return db.favoriteLinkUser.findMany()
}

export const favoriteLinkUser: QueryResolvers['favoriteLinkUser'] = ({
  id,
}) => {
  return db.favoriteLinkUser.findUnique({
    where: { id },
  })
}

export const createFavoriteLinkUser: MutationResolvers['createFavoriteLinkUser'] =
  ({ input }) => {
    return db.favoriteLinkUser.create({
      data: input,
    })
  }

export const updateFavoriteLinkUser: MutationResolvers['updateFavoriteLinkUser'] =
  ({ id, input }) => {
    return db.favoriteLinkUser.update({
      data: input,
      where: { id },
    })
  }

export const deleteFavoriteLinkUser: MutationResolvers['deleteFavoriteLinkUser'] =
  ({ id }) => {
    return db.favoriteLinkUser.delete({
      where: { id },
    })
  }

export const deleteFavoriteLinkUserByLinkUserId: MutationResolvers['deleteFavoriteLinkUserByLinkUserId'] =
  ({ linkId, userId }) => {
    return db.favoriteLinkUser.delete({
      where: { favorite: { linkId, userId } },
    })
  }

export const FavoriteLinkUser: FavoriteLinkUserRelationResolvers = {
  user: (_obj, { root }) => {
    return db.favoriteLinkUser.findUnique({ where: { id: root?.id } }).user()
  },
  link: (_obj, { root }) => {
    return db.favoriteLinkUser.findUnique({ where: { id: root?.id } }).link()
  },
}
