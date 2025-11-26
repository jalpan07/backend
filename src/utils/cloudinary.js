import {v2 as cloudinary} from 'cloudinary'
import fs from "fs"

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_CLOUD_API,
    api_secret : process.env.CLOUDINARY_CLOUD_SECRET,
})


const uploadoncloudinary = async(localfiepath) =>{
    try{
        if(!localfiepath){
            return null;
        }
        const response = await cloudinary.uploader.upload(localfiepath,{
            resource_type : "auto"
        })
        console.log("file is uploaded on cloudinary", response.url);
        return response;
        
    }
    catch(e){
        fs.unlinkSync(localfiepath) //removed locally sved file as it failed

    }
}