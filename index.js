const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag')
const mongoose = require('mongoose') // mongoose is orm library

const Post = require('./models/Post');
const { MONGODB } = require('./config.js');

// type definitions
const typeDefs = gql`
    type Post {
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
    type Query {
        getPosts: [Post]  
    }
`

// resolvers : for each query we will have a resolver that will process it
const resolvers = {
    Query: {
        async getPosts() {
            try {
                const posts = await Post.find();
                return posts
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}

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