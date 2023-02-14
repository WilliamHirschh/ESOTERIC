const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    token: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Post {
    _id: ID!
    body: String!
    createdAt: String!
    username: String!
  }

  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }

  type Mutation {
    createUser(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User
    
    removeUser(userId: ID!): User

    createPost(body: String!): Post!
    deletePost(postId: ID!): Post!
  }

`;

module.exports = typeDefs;
