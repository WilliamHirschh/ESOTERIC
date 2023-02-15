const { model, Schema } = require('mongoose');

const postSchema = new Schema({
    body: {type: String},
    username: {type: String},
    createdAt: {type: Date, default: Date.now},
})

const Post = model('Post', userSchema);

module.exports = Post;