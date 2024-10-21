const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt");
// const home = reqiure("../controllers/auth-controller")
// const home = reqiure("../controllers/auth-controller.js")

const User = require("../models/user-model")

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to MERN Stack auth")
    } catch (error) {
        console.log(error)
    }
}

const register = async (req, res) => {
    try {
        // console.log(req.body)
        // res.status(200).send("Welcome to registation page.")
        // res.status(200).json("Welcome to registation page.")
        // res.status(200).json({message:req.body})
        const { username, email, phone, password } = req.body

        const userExist = await User.findOne({ email })

        if (userExist) {
            return res.status(400).json({ message: "email already exist" })
        }

      
        // const saltRound = 10
        // const  hash_password = await bcrypt.hash(password,saltRound)


        const userCreated = await User.create({
            username,
            email,
            phone,
            // password:hash_password
            password
        })

        //  res.status(200).json({msg: userCreated, token:await userCreated.generateToken(),userId:userCreated._id.toString()})
        res.status(201).json({
            // msg: userCreated,
            msg:"registation successful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        })

    }
    catch (error) {
        // console.log(error)
        res.status(500).json("internal server error")

    }
}





const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const userExist = await User.findOne({ email })
        // console.log(userExist)

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credntials" })
        }

        // const user = await bcrypt.compare(password, userExist.password)
        // const user = await bcrypt.compare(password, userExist.password)

        const user = await userExist.comparePassword(password)

        if (user) {
            res.status(200).json({
                msg: "Login successfull",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()

                // msg: "Login successfull",
                // token: await userCreated.generateToken(),
                // userId: userCreated._id.toString()
            })

        } else {
            res.status(401).json({ message: "Invalid email or password" })
        }
    }
    catch (error) {
        res.status(500).json("internal server error")
        // next(error)
    }
}

const user = async(req,res)=>{
    try{
       const userData = req.user
       console.log(userData)

       return res.status(200).json({userData})
    }
    catch(error){
        console.log(`error from the user route ${error}`)
    }
}

module.exports = { home, register, login, user }