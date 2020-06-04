const { gql } = require('apollo-server');

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
<<<<<<< HEAD:graphql/typedefs.js
    likeCount: Int!
    commentCount: Int!
=======
    tags: [Tag]
>>>>>>> 859f5e79c9a14966a8ec4453d7f5582609cd667b:server/graphql/typedefs.js
  }
  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type Tag {
    id: ID!
    createdAt: String!
    name: String!
    description: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
    getTags: [Tag]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    createTag(name: String!, description: String): Tag
  }
<<<<<<< HEAD:graphql/typedefs.js
  type Subscription {
    newPost: Post!
  }
`;
=======
`
>>>>>>> 859f5e79c9a14966a8ec4453d7f5582609cd667b:server/graphql/typedefs.js
