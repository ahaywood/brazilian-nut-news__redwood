export const schema = gql`
  type Comment {
    id: String!
    body: String!
    link: Link!
    linkId: String!
    author: User!
    authorId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    parentComment: Comment
    parentCommentId: String
    childComments: [Comment]!
    votes: [CommentUserVote]!
  }

  type Query {
    comments: [Comment!]! @skipAuth
    comment(id: String!): Comment @skipAuth
  }

  input CreateCommentInput {
    body: String!
    linkId: String!
    authorId: Int!
    parentCommentId: String
  }

  input UpdateCommentInput {
    body: String
    linkId: String
    authorId: Int
    parentCommentId: String
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @skipAuth
    updateComment(id: String!, input: UpdateCommentInput!): Comment! @skipAuth
    deleteComment(id: String!): Comment! @skipAuth
  }
`
