const path = require("path");
const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const app = express();
host = "localhost"
const port = 5000;
app.use('/',express.static('./static'));
app.use('/static/uploads',express.static('./static/uploads'));


const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, './static/uploads/')
        },
        filename: function(req, file, cb){
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    }),
    limits: {fileSize: 2 * 1024 * 1024},
    fileFilter: function (req, file, cb){
        const filetypes = /png|docx|pdf/;
        const extension = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if(mimetype && extension){
            return cb(null, true);
        }else{
            cb(new Error("Only .png, .docx, and .pdf files are allowed"));
        }
    }
}).single('file');

app.post('/upload',(req,res)=>{
    upload(req, res, async function (err){
        if(err){

            return res.status(400).json({error: err.message});
        }
        if(!req.file){
            return res.status(400).json('No file uploaded.');
        }

        if(req.file && req.file.mimetype === 'image/png'){
            try{
                const image = await sharp(req.file.path);
                const metadata = await image.metadata();

                if(metadata.width > 400 || metadata.height > 300){
                    return res.status(400).json({error: "Image dimension must be less than 400 x 300 pixels."});
                }
            } catch(imageError){
                return res.status(400).json({error: 'Error processing the image file'});
            }
        };
        const fileLink = `http://${host}:${port}/static/uploads/${req.file.filename}`;
        res.json({"link" :fileLink});
    })
})

app.listen(port,()=>{
    console.log(`listening on http://${host}:${port}/`);
});