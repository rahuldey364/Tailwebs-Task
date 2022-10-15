const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")


const authentication = async (req,res,next) => {
    try {
        const token = req.headers.authentication || req.cookies.token
        console.log(token)
        const tokenCheck = jwt.verify(token, "secret-key")
        req.userId = tokenCheck.userId
        next()

    } catch (error) {
        res.send(error)
    }
}

module.exports = {authentication}
