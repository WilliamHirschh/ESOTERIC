const router = require('express').Router();
const { body, validationResult } = require('express-validator');

//Post api/users
//Registering user

router.post(
    '/', 
    [
        body('name', 'Name is required').notEmpty(), // name must be filled
        body('email', 'Email is required').isEmail(), // email can't be empty
        
        //password must be at least 5 chars long
        body('password', 'Password is required and must be 5 char long').isLength({ min:5 }),
    ],
    (req,res) => {
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send(req.body);
});

module.exports = router;