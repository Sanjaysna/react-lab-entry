const express =required("express")
const cors= required("cors")
const mongoose= required("mongoose")

const app=express()
app.use(cors())
app.use(express.json())

