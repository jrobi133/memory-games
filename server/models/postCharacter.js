
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostCharacter = mongoose.model('PostCharacter', postSchema);

export default PostCharacter;