const router = require ('express').Router();
const User = require('./User')


router.use('/User', User);

module.exports = router;