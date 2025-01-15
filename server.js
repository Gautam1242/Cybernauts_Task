import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors"
import userRouter from "./routes/UserRoute.js";

// config dotenv
dotenv.config();

//app config
const app=express();
const PORT=process.env.PORT || 3000;

// middleware initialization
app.use(express.json());
app.use(cors());


// connect to database
connectDB();

// api endpoints
app.use('/api',userRouter);

app.get("/",(req,res)=>{
    res.send("Hello World Gautam");
})


app.listen(PORT,()=>{
    console.log(`Server is running on port no ${PORT}`);
})