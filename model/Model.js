import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        oindian:{
            type: Number,
            required: false
        },
        ointernational:{
            type: Number,
            required: false
        },
        indian:{
            type: Number,
            required: false
        },
        international:{
            type: Number,
            required: false
        },
        days:{
            type: Number,
            required: false
        },
        files: []
    },
    {
        timestamps: true
    }
);

const Admin = mongoose.models.Admin || mongoose.model("Admin",UserSchema);
export {Admin}