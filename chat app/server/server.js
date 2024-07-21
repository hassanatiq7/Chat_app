import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth-routes.js'
import messagesRoutes from './routes/messages-routes.js'
import userRoutes from './routes/user-routes.js'

import connectToMongoDB from "./db/db.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;


app.use(express.json())
app.use(cookieParser())


app.use('/api/auth', authRoutes)
app.use('/api/messages', messagesRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`Server running at ${PORT}`)
})

// app.get('/', (req,res)=>{
//     res.send('Hello from server');
// })