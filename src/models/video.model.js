import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const videochema = new Schema ({
    videofile : {
        type:"string",
        required : true,
    },
    thumbnail : {
        type:"string",
        required : true,
    },
    title : {
        type:"string",
        required : true,
    },
    description : {
        type:"string",
        required : true,
    },
    duration : {
        type:Number,
        required : true,
    },
    veiws : {
        type:Number,
        default : 0,
    },
    ispublished : {
        type:Boolean,
        required : true,
    },
    owner : {
        type:Schema.type.objectId,
        ref : "user",
    },

},{timestaps : true})


videochema.plugin(mongooseAggregatePaginate)
export const Video_schema = mongoose.model("video",videochema)