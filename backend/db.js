const mongoose=require("mongoose");
const url="mongodb+srv://manvitha_m:umes%401234@cluster0.bvfldq6.mongodb.net/umes?retryWrites=true&w=majority"
const db=()=>{
    mongoose.connect(url,()=>{
        console.log("mongo connnected successfully");
    })
}
module.exports=db;