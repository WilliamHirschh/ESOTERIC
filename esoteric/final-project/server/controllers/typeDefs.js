const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Post {
    msg: String!
    postId: ID!

  }

  type Query {
    users: [User]
    user(userId: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String): Auth
    
    removeUser(userId: ID!): User

    createPost(msg: String!, ..., ... ): Post
  }

`;

module.exports = typeDefs;