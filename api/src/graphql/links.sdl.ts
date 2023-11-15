export const schema = gql`
  type Link {
    id: String!
    title: String!
    link: String!
    submittedBy: User!
    submittedById: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    comments: [Comment]!
    countVotes: Int
    countFavorites: Int
    countComments: Int
    favorite: [FavoriteLinkUser]!
    linkUserVotes: [LinkUserVote]!
    currentUserFavorite: Boolean
    currentUserVote: String
  }

  type Query {
    links: [Link!]! @skipAuth
    linksByVote(page: Int): [Link!]! @skipAuth
    linksByRecent: [Link!]! @skipAuth
    link(id: String!): Link @skipAuth
  }

  input CreateLinkInput {
    title: String!
    link: String!
    submittedById: Int!
  }

  input UpdateLinkInput {
    title: String
    link: String
    submittedById: Int
  }

  type Mutation {
    createLink(input: CreateLinkInput!): Link! @skipAuth
    updateLink(id: String!, input: UpdateLinkInput!): Link! @skipAuth
    deleteLink(id: String!): Link! @skipAuth
  }
`
