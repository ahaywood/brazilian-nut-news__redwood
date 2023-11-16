export const schema = gql`
  type FavoriteLinkUser {
    id: Int!
    user: User!
    userId: Int!
    link: Link!
    linkId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    favoriteLinkUsers: [FavoriteLinkUser!]! @skipAuth
    favoriteLinkUser(id: Int!): FavoriteLinkUser @skipAuth
  }

  input CreateFavoriteLinkUserInput {
    userId: Int!
    linkId: String!
  }

  input UpdateFavoriteLinkUserInput {
    userId: Int
    linkId: String
  }

  type Mutation {
    createFavoriteLinkUser(
      input: CreateFavoriteLinkUserInput!
    ): FavoriteLinkUser! @skipAuth
    updateFavoriteLinkUser(
      id: Int!
      input: UpdateFavoriteLinkUserInput!
    ): FavoriteLinkUser! @skipAuth
    deleteFavoriteLinkUser(id: Int!): FavoriteLinkUser! @skipAuth
    deleteFavoriteLinkUserByLinkUserId(
      linkId: String!
      userId: Int!
    ): FavoriteLinkUser! @skipAuth
  }
`
