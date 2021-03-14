const router = require('express').Router();
//This file is used to hanlde all api call .
// router is using /api so now for any other call, user need not to write /api/user call. only /user will work.
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;


