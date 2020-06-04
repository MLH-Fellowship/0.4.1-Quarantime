const {gql} = require('apollo-server');

// type definitions
module.exports = gql`
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