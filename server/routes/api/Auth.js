const router = require('express').Router();

//Get api/auth

router.get('/', (req,res) => res.send('Auth route'));

module.exports = router;