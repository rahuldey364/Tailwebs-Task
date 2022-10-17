const axios = require("axios")

const log_in = (req, res) => {
    res.render("login.ejs")
}
const sign_up = (req, res) => {
    res.render("signup.ejs")
}

const homeRoute = async (req, res) => {
    try {
        const token = req.cookies.token
        // console.log(token)
        const headers = {
            'authentication': token
        }
        const response = await axios.get("https://student-management-tailwebs.herokuapp.com/all-students",{
            headers:headers
        })
        // console.log(response.data)
        res.render("index.ejs",{students:response.data})
    } catch (error) {
        console.log(error)
    }
}

const add_student = (req, res) => {
    res.render("add_student.ejs")
}

const update_student = async (req, res) => {
    try {
        const token = req.cookies.token
        // console.log(token)
        const headers = {
            'authentication': token
        }
        const response = await axios.get("https://student-management-tailwebs.herokuapp.com/all-students",{
            headers:headers,
            params:{id:req.query.id}
        })
        //console.log(response.data)
        res.render("update_student.ejs",{students:response.data})
    } catch (error) {
        console.log(error)
    }
}

module.exports = { log_in,homeRoute, add_student, update_student , sign_up }