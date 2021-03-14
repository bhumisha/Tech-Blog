const router = require('express').Router();

const userRoutes = require('./user-routes.js');
// router is using /api so now for any other call, user need not to write /api/users/{id} call. only / will work. 
//Here  user-routes file if you have / api call which internally make /api/users/ call.
router.use('/users', userRoutes);

module.exports = router;