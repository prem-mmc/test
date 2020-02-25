const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);  //'Post' is name of the model it should be capital, postSchema is name of schema