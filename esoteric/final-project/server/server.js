const express = require("express");
const db = require('./config/connection');
//const routes = require("./routes")
const {typeDefs, resolvers} = require('./controllers')
const {ApolloServer} = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
})



//middleware function 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//once the mongoose connection is made with db call, render the event once.
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);