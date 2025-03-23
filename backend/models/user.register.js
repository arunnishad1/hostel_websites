const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")
const registerSchema = new mongoose.Schema({
    email:{
        unique:true,
        type:String,
        required:true,
    },
    password:{
            type: String,
            required: [true, "Password is required"],
            validate: {
                validator: function (value) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/.test(value);
                },
                message:"Password must be 8-32 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character",
            },
            },
    resetTokenExpiry:{
        type:Date
    },
    resetToken:{
        type:String,
    }
},{timestamps:true})

registerSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next()
    }
    this.password = await bcrypt.hash(this.password, 10)
    return next()
})

registerSchema.methods = {
    async Token(){
        return jwt.sign({id:this._id, email:this.email},
            'secret',
            {expiresIn:'24h'}
        )
    },

    async forgotPasswordToken(){
        const token = crypto.randomBytes(32).toString('hex')
        this.resetToken = crypto
        .createHash('sha256')
        .update(token)
        .digest('hex')
        this.resetTokenExpiry = Date.now() + 15*60*1000;
        return token
    },

}

const register = new mongoose.model("register", registerSchema)
module.exports = register;