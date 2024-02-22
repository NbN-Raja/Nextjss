import mongoose from "mongoose"


const userSchema= new mongoose.Schema({
    email: String,
    username:String,
    password:String
})
mongoose.models = {};

const User = mongoose.model("User", userSchema);

export default User;