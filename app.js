require("dotenv/config")
 const userRouter = require("./router/userRouter")
 const catRouter = require("./router/catRouter")
 const blogRouter = require("./router/blogRouter")
const mongoose = require("mongoose")
const express = require("express")
const app = express()
 


app.use(express.json()) //middleware that tells db that data comming in json 

app.get('/',(req,res)=>{
    res.send("kara baba....")
})

 app.use('/api/user',userRouter)
 app.use('/api/category',catRouter)
 app.use('/api/blog',blogRouter)

app.listen(process.env.PORT)
async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = res.STATES
        console.log(data.connected);
    } catch (error) {
        console.log("Not Connected");
    }
}
db()