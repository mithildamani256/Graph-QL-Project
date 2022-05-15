const express = require('express');
const { json } =  require('micro');
const { ApolloServer } = require('apollo-server-express');
// const {bodyparser} = require('body-parser');
const { typeDefs } = require('./schema.js');
const {resolvers } = require('./resolver.js');

async function f(){
    var body =  await server.start();
    // $.response.setBody(body);
};

const app = express();
const server = new ApolloServer({typeDefs, resolvers});

f();

server.applyMiddleware({ app });

// app.use('/graphql', body-parser.json(), ApolloServer({})
// );

app.listen({port: 3000}, () =>
{
  console.log("now listening for requests on port 3000");
})  ;
