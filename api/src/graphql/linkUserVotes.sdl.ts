export const schema = gql`
  type LinkUserVote {
    id: Int!
    link: Link!
    linkId: String!
    user: User!
    userId: Int!
    direction: VoteDirection!
    createdAt: DateTime!
  }

  enum VoteDirection {
    UP
    DOWN
  }

  type Query {
    linkUserVotes: [LinkUserVote!]! @skipAuth
    linkUserVote(id: Int!): LinkUserVote @skipAuth
  }

  input CreateLinkUserVoteInput {
    linkId: String!
    userId: Int!
    direction: VoteDirection!
  }

  input UpdateLinkUserVoteInput {
    linkId: String
    userId: Int
    direction: VoteDirection
  }

  type Mutation {
    createLinkUserVote(input: CreateLinkUserVoteInput!): LinkUserVote! @skipAuth
    updateLinkUserVote(
      id: Int!
      input: UpdateLinkUserVoteInput!
    ): LinkUserVote! @skipAuth
    deleteLinkUserVote(id: Int!): LinkUserVote! @skipAuth
    deleteVoteForLink(userId: Int!, linkId: String!): LinkUserVote! @skipAuth
    upsertVoteForLink(
      userId: Int!
      linkId: String!
      direction: VoteDirection
    ): LinkUserVote! @skipAuth
  }
`
