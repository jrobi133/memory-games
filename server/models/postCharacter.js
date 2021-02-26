
const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    title: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostCharacter = mongoose.model('PostCharacter', postSchema);
module.exports = PostCharacter;