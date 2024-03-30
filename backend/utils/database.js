import mongoose  from  "mongoose"
const databaseConnection=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("mongodb connected successfully")
    }).catch((error)=>{
        console.log(error)
    })

}
export default databaseConnection