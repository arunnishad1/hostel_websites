const jwt  = require('jsonwebtoken')
const userAuth = async(req,res,next)=>{
    try {
        const auth = req.cookies
        // console.log(req)
        if(!auth){
            return res.status(401).json({
                message:'unauthorized user'
            })
        }
        const token = req.cookies.token;
        if(!token){
            res.status(401).json({
                message:'token not found'
            })
        }
            const userData = jwt.verify(token, 'secret')
            req.user = userData;
            next()
            } catch (error) {
                console.log(`ERROR: ${error}`)
            }
}

module.exports = {
    userAuth,
}

