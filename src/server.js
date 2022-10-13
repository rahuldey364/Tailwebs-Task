const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const path = require("path")
const app = express()

const connectDB = require("../src/server/database/connection")

dotenv.config({path:"config.env"})
const PORT = process.env.PORT || 8080


//log requests
app.use(morgan("tiny"))

//connection to db
connectDB()

//parse request to express
app.use(express.urlencoded({extended:true}))

//set view engine
app.set("view engine" , "ejs")
app.set("views" , path.resolve(__dirname,"views"))
//load assets
app.use("/css", express.static(path.resolve(__dirname,"assets/css")))
app.use("/js", express.static(path.resolve(__dirname,"assets/js")))


app.use("/" , require("../src/server/routes/route"))

app.listen(PORT,() => console.log(`Express app running on port ${PORT}`))