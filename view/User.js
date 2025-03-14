import express from "express";
import { adminCtrl, getCtrl } from "../controller/UserCtrl.js";
import multer from "multer";
import { storage } from "../utils/cloudinary.js";
import {  requireAuth } from '@clerk/express'

const UserRouter = express.Router();

const upload = multer({storage: storage});

UserRouter.put("/admin",upload.array("files",8),requireAuth(),adminCtrl);

UserRouter.get("/getdata",getCtrl);

export {UserRouter};