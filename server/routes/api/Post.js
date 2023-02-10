const router = require('express').Router();

//Get api/post

router.get('/', (req,res) => res.send('Post route'));

module.exports = router;