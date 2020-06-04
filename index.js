const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose') // mongoose is orm library

const typeDefs = require('./graphql/typedefs')
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config.js');


// setup apollo server : running express behind the scenes
const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, { useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB Connected')
        return server.listen({port: 5000})
    })
    .then(res => {
        console.log(`Server running at ${res.url}`)
    })