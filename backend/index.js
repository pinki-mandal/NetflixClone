// // import  express from 'express'
// import  express from "express"
// import  dotenv  from 'dotenv'
// const app = express();
// import   databaseConnection  from "./utils/database.js";
// import  cookieParser  from "cookie-parser"
// import userRoutes from './routers/userRoutes.js'
 
// dotenv.config(); 
// const P0RT = process.env.PORT || 8080; 
// databaseConnection()


// app.use(express.json())
// app.use(cookieParser)
// app.use(express.urlencoded({extended:true}))
// app.use("api/v1/user",userRoutes)

// app.get("/",(req,res)=>{
//     res.status(200).json({
//         message:"hello pinki mandal",
//         success:true
//     })
// })


// app.listen(()=>{
//     console.log(`server is running on port ${P0RT}`)
// })




// import express from 'express'
import express from "express";
import dotenv from 'dotenv';
const app = express();
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoutes from './routers/userRoutes.js';
import cors from 'cors'

dotenv.config(); 
const PORT = process.env.PORT || 8001; 
databaseConnection();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
const corsOption={
    origin:'http://localhost:3000',
    credentials:true
}
app.use(cors(corsOption))
// Mounting userRoutes under the path '/api/v1/user'
app.use("/api/v1/user", userRoutes);

// app.get("/", (req, res) => {
//     res.status(200).json({
//         message: "hello pinki mandal",
//         success: true
//     });
// });

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
