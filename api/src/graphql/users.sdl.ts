export const schema = gql`
  type User {
    id: Int!
    email: String!
    nickname: String
    firstName: String
    lastName: String
    twitter: String
    facebook: String
    youtube: String
    linkedin: String
    github: String
    totalVotesOnLinks: Int
    links: [Link]!
    comments: [Comment]!
    favorites: [FavoriteLinkUser]!
    commentVotes: [CommentUserVote]!
    linkVotes: [LinkUserVote]!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
    userByNickname(nickname: String!): User @skipAuth
  }

  input CreateUserInput {
    email: String!
    nickname: String
    firstName: String
    lastName: String
    twitter: String
    facebook: String
    youtube: String
    linkedin: String
    github: String
  }

  input UpdateUserInput {
    email: String
    nickname: String
    firstName: String
    lastName: String
    twitter: String
    facebook: String
    youtube: String
    linkedin: String
    github: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @skipAuth
    deleteUser(id: Int!): User! @skipAuth
  }
`
