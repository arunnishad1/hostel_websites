const register = require("../models/user.register.js")
const contacts = require("../models/contact.js")
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const { error } = require("console")

const signup = async(req,res)=>{
    try {
        const {email, password, cpassword} = req.body
        if(password != cpassword){
            return res.json({
                matchError:"password and confirmPassword does not match"
            })
        }
        const user = new register({
            email, 
            password,
        })
        await user.save()
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.json({
                passwordConditionError: error.message
            });
        }
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const login = async(req,res)=>{
    const{email, password} = req.body
    if(!email){
        return res.json({
            message:"enter the  email"
        })
    }

    if(!password){
        return res.json({
            message:"enter the  password"
        })
    }
    try {
        const userData = await register.findOne({email:email})
        if(!userData){
            return res.json({
                message:"Data not found"
            })
        }

        if(await bcrypt.compare(password, userData.password)){
            const token = await userData.Token()
            res.cookie('token', token,{
                httpOnly:true,
                maxAge:new Date(Date.now()+2*60*60*1000),
                secure:false,
                sameSite:'Lax' || 'Strict',
                path:'/',
                domain:'localhost',

            })
            return res.json({
                email:email,
                token:token,
                loggedIn:"user logged in with email and password"
            })
            
        }else{
            return res.json({
                message:"enter the correct email and password"
            })
        }
    } catch (error) {
        return res.json({
            error:error
        })
    }
}

const update = async(req, res)=>{
    const{oldPassword, newPassword} = req.body
    const userId = req.user
    if(!oldPassword){
        return res.json({
            message:"enter the  old password"
        })
    }

    if(!newPassword){
        return res.json({
            message:"enter the  new password"
        })
    }
    try {
        const userData = await register.findById({_id:userId.id})
        if(!userData){
            return res.json({
                message:"data not found"
            })
        }
        if(await bcrypt.compare(oldPassword, userData.password)){
            userData.password = newPassword
            await userData.save()
            return res.json({
                password:newPassword,
                message:"password change successfully"
            })
            
        }else{
            return res.json({
                message:"enter the correct old password"
            })
        }
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }
}
const resetPassword = async(req, res)=>{
    const {email} = req.body
    const userId = req.user
    if (!email){
        return res.json({
            message:"enter the  email"
        })
    }
    try {
        const userData= await register.findOne({email:userId.email})
        if(!userData){
            return res.json({
                message:"data not found"
            })
        }

        const resetToken = await userData.forgotPasswordToken();
        await userData.save()
        return res.json({
            resetToken:resetToken,
            "message":'token sent successfully'
        })
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }
}

const forgotPassword = async(req, res)=>{
    const{newPassword, confirmPassword} = req.body
    const resetToken = req.params.token;
    console.log(resetToken)
    if(!newPassword){
        return res.json({
            message:"enter the  newPassword"
        })
    }
    if(!confirmPassword){
        return res.json({
            message:"enter the  confirmPassword"
        })
    }

    if(newPassword!==confirmPassword){
        return res.json({
            message:"password does not match.."
        })
    }

    const userData  = await register.findOne({resetToken: crypto.createHash('sha256').update(resetToken).digest('hex')})
    if(!userData){
        return res.json({
            message:"data not found"
        })
    }


    if(userData.resetTokenExpiry<Date.now()){
        userData.resetToken= undefined
        userData.resetTokenExpiry=undefined
        await userData.save()
        return res.status(401).json({
            message:'token has been expired'
        })  
    }

    userData.password = newPassword
    // userData.newPassword = undefined
    userData.resetToken= undefined
    userData.resetTokenExpiry=undefined
    await userData.save()
    return res.json({
        newPassword:newPassword,
        'message':'password reset successfully'
    })

}

const contact = async(req,res)=>{
    const {email,subject,message} = req.body;
    if(!email){
        return res.json({
            message:"enter the  email"
        })
    }

    if(!subject){
        return res.json({
            message:"enter the  password"
        })
    }

    if(!message){
        return res.json({
            message:"enter the  password"
        })
    }

    try {
        const data = new contacts({
            email,
            subject,
            message
        })

        await data.save();
    } catch (error) {
        if(error.code==11000){
            return res.status(400).json({duplicate:"Email already exist, please enter new email"})
        }
    }
}

module.exports = {
    signup,
    login,
    update,
    contact,
    resetPassword,
    forgotPassword,
}