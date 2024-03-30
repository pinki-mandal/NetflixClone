import  {User}  from "../models/Usermodel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


// Login part
export const Login = async (req,res)=>{
    try{
        const {email,password} = req.body
        if (!email,!password){
            return res.json(401).json({
                message:"Invalid data"
            })
        }

        const user=await User.findOne({email})
        if (!user){
            return res.status(401).json({
                message:"Invalid email and password",
                status:false
            })
        } 
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch){
            return res.json({
                message:"Invalid email and password",
                status:false
            })
        }

        const tokenData={
            id:user._id

        }
        const token = await jwt.sign(tokenData,"pinkimandal",{expiresIn:"1d"}) 
        return res.status(200).cookie("token",token,{httpOnly:true}).json({
        message:`Welcome back ${user.fullname}`,
        user,
        success:true

    })
        
    }catch(error){
        console.log(error)

    }
}


// logout part

export const Logout = async (req,res)=>{
    return res.status(200).cookie("token","",{expiresIn:new Date (Date.now()),httpOnly:true}).json({
        message:"User logged successfully",
        success:true
    })
}

// register part
export const Register = async (req,res)=>{
    try{
        const {fullname,email,password} = req.body;
        if (!fullname,!email,!password){
            return res.status(401).json({
                message:"Invalid data",
                status:false
            })
        }

        const user=await User.findOne({email})
        if (user){
            return res.status(401).json({
                message:"this email is already exist",
                success:false
            })
        }
        const hashedPassword = await bcrypt.hash(password,10)
        await User.create({
            fullname,
            email,
            password:hashedPassword
    })
    return res.status(201).json({
        message:"account created successfully",
        success:true

    })
}
   
    catch (error){
        console.log(error)
    }
}
export default Register