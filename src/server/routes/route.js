const express = require("express")
const router = express.Router()

const services = require("../services/render")
const controller = require("../controllers/controller")

router.get("/" , services.homeRoute)
router.get("/add-student" ,services.add_student)
router.get("/update-student" ,services.update_student)

//API
router.post("/add-student" , controller.add_Student)

module.exports = router