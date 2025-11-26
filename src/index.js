import CONNECT_DB from "./db/index.js";
import dotenv from 'dotenv'

dotenv.config({
    path:'./env'
})
// const app = express()
// (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is Listening on port ${process.env.PORT}`);
            
//         })
//     }catch(e){
//         console.log("ERROR: ",e); 
//     }

// })()

CONNECT_DB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Process is running at ${process.env.PORT}`);
        
    })
})
.catch((e)=>{
    console.log("Error connecting");
})