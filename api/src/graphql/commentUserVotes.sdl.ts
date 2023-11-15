export const schema = gql`
  type CommentUserVote {
    id: Int!
    comment: Comment!
    commentId: String!
    user: User!
    userId: Int!
    createdAt: DateTime!
  }

  type Query {
    commentUserVotes: [CommentUserVote!]! @skipAuth
    commentUserVote(id: Int!): CommentUserVote @skipAuth
  }

  input CreateCommentUserVoteInput {
    commentId: String!
    userId: Int!
  }

  input UpdateCommentUserVoteInput {
    commentId: String
    userId: Int
  }

  type Mutation {
    createCommentUserVote(input: CreateCommentUserVoteInput!): CommentUserVote!
      @skipAuth
    updateCommentUserVote(
      id: Int!
      input: UpdateCommentUserVoteInput!
    ): CommentUserVote! @skipAuth
    deleteCommentUserVote(id: Int!): CommentUserVote! @skipAuth
  }
`
