const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const con = await mongoose.connect("mongodb+srv://FunctionUp-cohort-1:TENBQZypGNobyoq3@cluster0.7jbgo.mongodb.net/Tailweb-DB?retryWrites=true&w=majority",{
            useNewUrlParser:true
        })

        console.log(`mongoDB connected : ${con.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB