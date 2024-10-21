const express = require("express")
const router = express.Router()

// const {home,register} = require("../controllers/auth-controller.js")
const authcontrollers = require("../controllers/auth-controller.js")
const {signupSchema,loginSchema} = require("../validators/auth-validator.js")
const validate = require("../middlewares/validate-middleware.js")
// const authcontrollers = require("../middlewares/auth-middleware.js")
// const authcontroller = require("../middlewares/auth-middleware.js")
const authMiddleware = require("../middlewares/auth-middleware.js")



router.route("/").get(authcontrollers.home);
// router.route("/register").get(authcontrollers.register);
router.route("/register").post(validate(signupSchema),authcontrollers.register);
router.route("/login").post(validate(loginSchema),authcontrollers.login);


// router.route("/user").get(authMiddleware,authcontrollers.user)
router.route("/user").get(authMiddleware,authcontrollers.user)

// router.get("/",(req,res)=>{
//     res.status(200).send("Welcome to Nodejs router.")
// })

// Use this way also
// router.route("/").get((req,res)=>{
//     res.status(200).send("Welcome to Nodejs router.")
// })

module.exports = router
