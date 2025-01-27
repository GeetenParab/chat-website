import express from 'express';
import cookieParser from 'cookie-parser';
import path from "path"
import { app, server } from './socket/socket.js';



import authRoutes from "./Routes/auth.route.js";
import messageRoutes from "./Routes/message.route.js";

import dotenv from "dotenv";

dotenv.config();
app.use(express.json());
app.use(cookieParser());

const __dirname = path.resolve();


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


if (process.env.NODE_ENV !== "development") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
	});
}

server.listen(process.env.PORT,()=>{
    console.log('server is running on port 5001');
})