
const router = require('express').Router();

//Get api/users

router.get('/', (req,res) => res.send('User route'));

module.exports = router;