const jwt = require("jsonwebtoken")

async function auth(req,res,next){
    try {
        const token =  req.header("auth-token")
        const validtoken = await jwt.verify(token,process.env.SEC)
        if(!validtoken) return res.status(500).json({errors:true,message:"Token not valid!!!"})
            next()
    } catch (error) {
     return res.status(500).json({errors:true ,errors:error.message})   
    }
}


module.exports = auth