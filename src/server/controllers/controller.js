const studentModel = require("../models/studentModel")
const userModel = require("../models/userModel")

const add_Student = async (req,res) => {
    try {
        const {name,subject,marks} = req.body
        const createdUser = await studentModel.create(req.body)
        res.json(createdUser)

    } catch (error) {
        res.send(error)
    }
}

module.exports={add_Student}