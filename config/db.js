const { bgBlue } = require("colors");
const mongoose=require("mongoose");
const colors=require("colors");

const connectDB =  async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to mongoDB database ${mongoose.connection.host}`.bgCyan.white);

    }
    catch(error){
        console.log(`MongoDB database error ${error}`.bgBlue.white)

    }

}









module.exports={connectDB};