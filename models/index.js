// import all models
const Post = require('./Post');
const User = require('./User');

const Comment = require('./Comment');

// create associations

//User has many post which is associatted with user_id
User.hasMany(Post, {
  foreignKey: 'user_id'
});

//Post belongs to User. 
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

//Comments belogs to User. User can enter comment .
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

//Comment is related to Post. it belongs to Post. User can give comments on Post.
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

//Usre has many comments.
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

//Post has many comments.
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };
