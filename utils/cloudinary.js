import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({ 
    cloud_name: 'dgmfnfvf9', 
    api_key: '142568998493883', 
    api_secret: process.env.CLOUDINARY_API_SECRET  // Click 'View API Keys' above to copy your API secret
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "trickyhash",
        allowed_formats: ["jpg","png","jpeg"],
        type: "authenticated",    
        transformation: [{quality: "auto"}],
    }
});

export {storage}