require("dotenv").config
const express = require("express");
const app = express()
const authRouter = require("./router/auth-router")
const contactRoute = require("./router/contact-router")
const connectdb = require("./utils/db");
const errorMiddlerware = require("./middlewares/error-middleware");
const cors = require("cors")

// Mount the Router : To use the router in your main Express app, you can "mount" it at a specific URL prefix

const corsOptions = {
    origin:"http://localhost:3000",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

app.use(cors(corsOptions))
// app.use(cors)

app.use(express.json())

app.use("/api/auth",authRouter)
app.use("/api/form",contactRoute)
// app.use("/api/data",serviceRoute)

app.use(errorMiddlerware)

// app.get("/",(req,res)=>{
//     res.status(200).send("Welcome to MERN Stack")
// })

const PORT = 5000
connectdb().then(()=>{
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
})