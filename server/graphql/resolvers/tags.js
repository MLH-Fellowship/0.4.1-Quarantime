const { AuthenticationError, UserInputError } = require('apollo-server')

const checkAuth = require('../../util/check-auth')
const Post = require('../../models/Tag')

module.exports = {
  Query: {
    async getTags() {
      try {
        const tags = await Tag.find().sort()
        return tags
      } catch (err) {
        throw new Error(err)
      }
    },
  },
  Mutation: {
    async createTag(_, { name, description }, context) {
      if (name.trim() === '') {
        throw new Error('Body of the post is empty')
      }

      const newTag = new Tag({
        name,
        description: description || '',
        createdAt: new Date().toISOString(),
      })

      const tag = await newTag.save()

      return tag
    },
  },
}
