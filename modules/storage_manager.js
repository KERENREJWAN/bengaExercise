const multer = require('multer');
const db = require('./db_manage');
const uuid = require('uuid');

//create a storage to contain the files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../client/public/files')
    },
    filename: function (req, file, cb) {
        cb(null, uuid.v4())
    }
})

//declare the upload file method
const upload = multer({ storage: storage }).single('file');

module.exports = (app) => {
    app.post('/upload', function (req, res) {
        upload(req, res, async function (err) {

            //if there are errors, show them
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }

            let fileData = {
                filePath: req.file.path,
                fileName: req.file.originalname
            }

            //save the file refernce the db and return the code for that file
            let code = await db.insert(fileData);
            return res.status(200).send(code);
        })
    });

    //get the file by its code and send back its path and file name
    app.post('/download', async function (req, res) {
        let fileFromDb = await db.get(req.body.code);
        const path = fileFromDb.file.filePath;
        const fileName = fileFromDb.file.fileName;

        res.download(path, fileName);
    })
}