const router = require ('express').Router();
const User = require('./User');
const Profile = require('./Profile');
const Post = require('./Post');
const Auth = require('./Auth');


router.use('/user', User);
router.use('/profile', Profile);
router.use('/post', Post);
router.use('/auth', Auth);

module.exports = router;