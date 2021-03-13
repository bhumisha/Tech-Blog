const { Post } = require('../models');

const postdata = [
  
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  
 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
