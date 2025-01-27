import express from 'express';
import cookieParser from 'cookie-parser';

import { app, server } from './socket/socket.js';



import authRoutes from "./Routes/auth.route.js";
import messageRoutes from "./Routes/message.route.js";

import dotenv from "dotenv";

dotenv.config();
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(process.env.PORT,()=>{
    console.log('server is running on port 5001');
})