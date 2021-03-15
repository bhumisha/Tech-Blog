const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Aliquam erat volutpat. In congue.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 1,
    post_id: 1
  },

];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
