import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
        timeStamp: { type: Date, default: Date.now }, // Fixed: Use type Date and default value for timeStamp
    content: String,
    like: Number,
    comment: String,
});

mongoose.models = {};


const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
