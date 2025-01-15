import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    hobbies:{
        type:[],
        required:true
    }
})

const UserModel=mongoose.models.user || mongoose.model("user",UserSchema);

export default UserModel;