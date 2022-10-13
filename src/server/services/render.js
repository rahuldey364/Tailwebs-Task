const homeRoute = (req,res) => {
    res.render("index.ejs")
}

const add_student = (req,res) => {
    res.render("add_student.ejs")
}

const update_student = (req,res) => {
    res.render("update_student.ejs")
}

module.exports = {homeRoute,add_student,update_student}