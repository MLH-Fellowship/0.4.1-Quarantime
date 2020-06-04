// this is to combine both the resolvers
const postsResolvers = require('./post');
const usersResolvers = require('./users')

module.exports = {
    Query: {
        ...postsResolvers.Query // Spread Operator
    }
}