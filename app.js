const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect(
    "mongodb://sanjaysanthosh411_db_user:sanjaymongo@ac-cau8tnt-shard-00-00.oizbpqu.mongodb.net:27017,ac-cau8tnt-shard-00-01.oizbpqu.mongodb.net:27017,ac-cau8tnt-shard-00-02.oizbpqu.mongodb.net:27017/labdb?ssl=true&replicaSet=atlas-11v5dq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
).then(
    () => {
        console.log("mongodb connected")
    }
).catch((error) => {
    console.log(error)

})

const Lab = mongoose.model("Labs", new mongoose.Schema(
    {
        name: String,
        department: String,
        sem: String,
        course: String,
        systemnumber: String,
        timein: String,
        timeout: String,
        date: String

    }
))

app.get("/test", (request, response) => {
    response.send("hello")
})

app.get("/view-lab", async (request, response) => {
    const labs = await Lab.find()
    response.json(labs)
})


app.post("/add-lab", async (request, response) => {
    await Lab.create(request.body)
    response.json({ "Status": "Sucess" })

})
app.listen(3001, () => {
    console.log("server started")
})