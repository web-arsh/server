import express from "express";
import "./libs/mongodb.js";
import { UserRouter } from "./view/User.js";
import Cors from "cors";
import { globalErrHandler } from "./middleware/middleware.js";

const app = express();
const port = process.env.PORT || 4444;
const corsOption = {
    origin: 'https://trickyhash.vercel.app', // Allow requests from your frontend
    methods: ['GET', 'PUT'], // Allow specific HTTP methods
    // allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
};


app.use(Cors(corsOption));

app.use(express.json());

app.use("/api",UserRouter);

app.use(globalErrHandler);

app.listen(port,() => {
    console.log("Server is started"+port);
});
