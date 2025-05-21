import mongoose from "mongoose"

//Function to connect MongoDB database

const connectDB = async () =>{
    mongoose.connection.on('connected', ()=> console.log("Database Connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/chathubdev`)
}

export default connectDB