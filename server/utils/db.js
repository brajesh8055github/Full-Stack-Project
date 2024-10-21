const mongoose = require("mongoose")

const URI = process.env.MONGODB_URI
// const URI = "mongodb+srv://kumarbrajesh8055:finalbd@cluster0.hc6rxa3.mongodb.net/mern_admin?retryWrites=true&w=majority"

const connectdb = async()=>{

    try{
    await mongoose.connect(URI)
    console.log("connection successful to DB")
    }
    catch(error){
        console.log("database connection failed")
        process.exit(0)

    }
}
module.exports = connectdb