const mongoose = require('mongoose')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    id:String,
    email:String,
    firstname:String,
    lastname:String,
    password:{
        select:false,
        type:String
    },
    isUser:{
        type:Boolean,
        default:true
    },
    isHospital:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

//encrypt password before save
userSchema.pre('save',async function(next){

    if(!(this.isModified('password'))){
        return next()
    }

    this.password= await bcrypt.hash(this.password,10)

})

//validate the password with passedon userpassword
userSchema.methods.isValidatedPassword = async function(userSendPassword){
    return await bcrypt.compare(userSendPassword,this.password)
}

//create and return jwt_token
userSchema.methods.getJwtToken = function(){
    return jwt.sign(
        {   
            email:this.email,
            isAdmin:this.isAdmin,
            firstname:this.firstname,
            lastname:this.lastname,
            isHospital:this.isHospital,
            isAdmin:this.isAdmin,
            id:this.id
        },
        process.env.JWT_SECRET,
        {expiresIn:'1h'}
    )
}   

module.exports=mongoose.model('User',userSchema)