import mongoose,{Schema} from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const userschema = new Schema ({
    username : {
        type : "string",
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        index : true,
    },
    username : {
        type : "string",
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },
    fullname : {
        type : "string",
        required : true,
        trim : true,
        index : true,
    },
    avatar : {
        type : "string",
        required : true,
    },
    coverimage : {
        type : true,
    },
    watch_history : [
      {  
        type : Schema.type.objectId,
        ref : "video",
      }
    ],
    password : {
        type : "string",
        required : [true,"Password is required"],
    },
    refreshtoken : {
        type :"string"
    }
},{timestamps:true})

userschema.pre("save",async function(next){
    if(!this.isModified("password")) return next;
    this.password = bcrypt.hash(this.password,10)
    next()
})

userschema.methods.ispasswordcorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

userschema.methods.generateAccessToken = function(){
    jwt.sign(
        {
            _id: this._id,
            email : this.email,
            fullname : this.fullname,
            username : this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userschema.methods.generateRefreshToken = function(){
    jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,{
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const user = mongoose.model("user",userschema)
