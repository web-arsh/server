import { AppErr } from "../utils/AppError.js";
import { Admin } from "../model/Model.js";

const adminCtrl = async (req,res,next) => {
    const {indian,international,days,oindian,ointernational} = req.body;
    try {
        if(!indian && !international && !days && !req.files && !oindian && !ointernational) return next(new AppErr("Fields are empty.",400));
        const data = await Admin.find();
        if(data?.length !== 0){
            await Admin.deleteMany({});
        }
        const uploadedFiles = req.files.map((file) => file.path);
        
        await Admin.create({
            indian,
            international,
            oindian,
            ointernational,
            days,
            files: uploadedFiles
        },{
            new: true
        });
       
        res.json({msg: data.length});
    } catch (error) {
        next(new AppErr(error.message,500));
    }
}

const getCtrl = async (req,res,next) => {
    try {
        const data = await Admin.find().select("-_id days indian international files updatedAt oindian ointernational");
        res.json({data});
    } catch (error) {
        next(new AppErr(error.message,500));
    }
}

export { adminCtrl,getCtrl }