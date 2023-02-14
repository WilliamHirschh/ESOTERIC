const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');
const { signToken} = require('../utils/auth')

const resolvers = {
    /* Queries GET data */
    Query: {
        users: async () => {
            return await User.findAll();
        },
        user: async (parent, { userId}) => {
            return await User.findOne( {_id: userId });
        }
    },
    /* Mutation is POST, PUT or DELETE request */
    Mutation: {
        createUser: async (parent, {name, email, password}) => {
            const user = await User.create({name, email, password});
            const token = signToken(user);

            return { token, user };
        },

        login: async(parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user with this email found!');
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
                }
            
            const token = signToken(user);
            return { token, user };
        },

        removeUser: async (parent, { userId }) => {
            return profile.findOneAndDelete({ _id: userId });
        },

        createPost: asy



    }, 
};


module.exports = resolvers;