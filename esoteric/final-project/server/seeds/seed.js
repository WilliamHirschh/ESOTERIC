const db = require('../config/connection');
const { User } = require ('../models');
const userSeeds = require ('./userSeeds.json');

db.once('open', async () => {
    try {
        console.log("delete")
        await User.deleteMany({});
        
        console.log("create")
        await User.create(userSeeds);

        console.log( "Running!" )
        process.exit (0);
    } catch (err) {
        throw err;
    }
})