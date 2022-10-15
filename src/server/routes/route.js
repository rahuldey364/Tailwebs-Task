const express = require("express")
const router = express.Router()

const services = require("../services/render")
const controller = require("../controllers/controller")
const auth = require("../auth/auth")

router.get("/" , services.log_in)
router.get("/signup" , services.sign_up)
router.get("/user" , services.homeRoute)
router.get("/add-student" ,services.add_student)
router.get("/update-student" ,services.update_student)

//API
router.post("/add-user" , controller.add_user)
router.post("/login" , controller.login)
router.post("/add-student" ,auth.authentication, controller.add_Student)
router.get("/all-students",auth.authentication,controller.get_Student)
router.put("/update-student/:id" ,auth.authentication, controller.update_student)
router.delete('/delete-student/:id',auth.authentication, controller.delete_student);

module.exports = router