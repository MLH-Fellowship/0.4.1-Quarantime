const {AuthenticationError, UserInputError} = require('apollo-server');

const checkAuth = require('../../util/check-auth');
const Post = require('../../models/Post');

module.exports = {
  Mutation: {
    createComment: async (parent, {postId, body}, context) => {
      const {username} = checkAuth(context);

      // logged in
      if (body.trim() === '') {
        throw new UserInputError('Empty comment', {
          errors: {
            body: 'Comment body must not be empty'
          }
        });
      }

      const post = await Post.findById(postId);

      if (post) {
        post.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString()
        });
        await post.save();
        return post;
      } else throw new UserInputError('Post unavailable');
    },
    async deleteComment(parent, {postId, commentId}, context) {
      const {username} = checkAuth(context);

      const post = await Post.findById(postId);
    
      if (post) {
        // find index of comment in the array
        const commentIndex = post.comments.findIndex((c) => c.id === commentId);
        
        // check if it is the owner of the event
        if (post.comments[commentIndex].username === username) {
          post.comments.splice(commentIndex, 1); // remove just 1
          await post.save();
          return post;
        } else {
          throw new AuthenticationError('Not allowed');
        }
      } else {
        throw new UserInputError('Post unavailable');
      }
    }
  }
};