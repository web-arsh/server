import mongoose from "mongoose";

const dbConnect = async () => {
    if(mongoose.connection.readyState >= 1){
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL, {dbName: "trickydata"});
        console.log("Database Connected");
    }catch(error){
        console.error("MongoDB Connection Failed:", error.message);
        throw new Error("Database Connection Failed");
    }
}

dbConnect();