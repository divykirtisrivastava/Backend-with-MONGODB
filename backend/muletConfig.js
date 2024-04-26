let multer = require('multer')
let path = require('path')

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null,file.fieldname  + '-' + Date.now() + path.extname(file.originalname) );
    }
});

module.exports = multer({ storage: storage });