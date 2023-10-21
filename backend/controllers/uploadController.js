const multer = require("multer");
const uploadController = require("express").Router();

//destination ->  where the image will be saved (in which directory) 
//filename -> what will be name of saved iamage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.filename);
    },
});

const upload = multer({
    storage: storage,
});

//upload.single("image") -> is going to check in req.body for req.body.image
uploadController.post("/image", upload.single("image"), async (req, res) => {
    try {
        return res.status(200).json("File uploded successfully");
    } catch (error) {
        console.error(error);
    }
});

module.exports = uploadController